// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Heavenlywords is ERC721URIStorage, Ownable {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    
    // -> contract variables
    uint256 public maxSupply = 777;
    uint256 public cost = 0.0777 ether;
    string public initialURI = 'https://gateway.pinata.cloud/ipfs/Qmc7sDVYucESNAsee8E3CSj2f3eNmNnqrJ75dGC1pdZC66';
    address public contractOwner;
    mapping (uint256 => string) public idToImageDesc;
    

    // -> contract constructor
    constructor() ERC721("Heavenlywords", "HWs") {
        contractOwner = msg.sender;
    }


    // -> contract methods
    function mint(address _recipient, string memory _imageDesc)
        public 
        payable
        returns (uint256)
    {      
        if (msg.sender != contractOwner)
        {
            require(msg.value >= cost, 'Not enough ETH sent; check price!');
        }

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        require(newItemId <= maxSupply);
        
        _mint(_recipient, newItemId);
        _setTokenURI(newItemId, initialURI);
        idToImageDesc[newItemId] = _imageDesc;
        return newItemId;
    }


    function contractURI() 
        public 
        pure 
        returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmeCXbGEXc3BiPz3johH7pFNVhFxC33rsvpczYGXP2oAHy";
    }
    
    
    function updateURIs(uint256[] memory _IDs, string[] memory _URIs)
        public
        onlyOwner
    {
        require(_IDs.length == _URIs.length);
        for(uint256 i = 0; i < _IDs.length; i++)
        {
            _setTokenURI(_IDs[i], _URIs[i]);
        }
    }


    function withdraw(uint256 _amount)
        public
        onlyOwner
    {
        payable(msg.sender).transfer(_amount);
    }


    function getOwner()
        public
        view
        returns(address)
    {
        return contractOwner;
    }
    

    function getCost()
        public
        view
        returns(uint256)
    {
        return cost;
    }
    
    
    function getMintCount()
        public 
        view
        returns(uint256)
    {
        return _tokenIds.current();
    }
    
    
    function getImageDescById(uint256 _id)
        public
        view
        returns(string memory)
    {
        return idToImageDesc[_id];
    }
    
}