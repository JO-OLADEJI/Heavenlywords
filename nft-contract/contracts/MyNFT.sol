//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    
    
    // -> contract variables
    bool public presale = true;
    bool public paused = false;
    uint256 public maxSupply = 7777;
    uint256 public cost = 0.07 ether;
    address contractOwner = msg.sender;
    mapping (address => bool) public whitelist;
    


    // -> contract constructor
    constructor() public ERC721("Heavenlywords", "NFT") {}



    // -> contract methods
    function mintNFT(address _recipient, string memory _tokenURI)
        public payable
        returns (uint256)
    {
        if (presale)
        {
            // check if the address is whitelisted
            require(isAddressWhitelisted(_recipient));
        }
        
        require(!paused, 'Minting is paused');
        require(msg.value >= cost, 'Not enough ETH sent; check price!');

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        
        // check if tokens are not up to max supply
        require(newItemId <= maxSupply);
        
        _mint(_recipient, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }
    
    
    
    function updateNFT(uint256 _tokenID, string memory _tokenURI)
        public
    {
        require(msg.sender == contractOwner);
        _setTokenURI(_tokenID, _tokenURI);
    }



    function withdrawEther(uint256 _amount) 
        public
    {
        require(msg.sender == contractOwner);
        payable(msg.sender).transfer(_amount);
    }
    
    
    
    function transferEther(address payable _addr, uint256 _amount) 
        public
    {
        require(msg.sender == contractOwner);
        _addr.transfer(_amount);
    }
    
    
    
    function checkBalance() 
        public view 
        returns(uint256) 
    {
        require(msg.sender == contractOwner);
        return(address(this).balance);
    }
    
    
    
    function setPresale(bool _value)
        public
    {
        require(msg.sender == contractOwner);
        presale = _value;
    }
    
    
    
    function setPaused(bool _value)
        public
    {
        require(msg.sender == contractOwner);
        paused = _value;
    }
    
    
    
    function setCost(uint256 _newCost) 
        public
    {
        require(msg.sender == contractOwner);
        cost = _newCost;
    }
    
    
    
    function getMintCount()
        public view
        returns(uint256)
    {
        require(msg.sender == contractOwner);
        return _tokenIds.current();
    }
    
    
    
    function whitelistAddress(address _addr)
        public
    {
        require(msg.sender == contractOwner);
        whitelist[_addr] = true;
    }
    
    
    
    function isAddressWhitelisted(address _addr)
        public view
        returns(bool)
    {
        require(msg.sender == contractOwner);
        return whitelist[_addr];
    }
    
}
















