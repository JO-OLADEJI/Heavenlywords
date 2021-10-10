//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // -> contract variables
    address payable public contractOwner = payable(0xAC14513E6B0e6D403592CbB21E0E044726CcF3E4);

    constructor() public ERC721("MyNFT", "NFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public payable
        returns (uint256)
    {
        require(msg.value >= 20000000000000000, "Not enough ETH sent; check price!");

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }


    function withdrawEther(uint256 amount) 
        public 
    {
        // can only be called by owner
        require(msg.sender == contractOwner, 'Method reserved for owner');
        contractOwner.transfer(amount);
    }
    
    
    function transferEther(address payable addr, uint256 amount) 
        public 
    {
        // can only be called by owner
        require(msg.sender == contractOwner, 'Method reserved for owner');
        addr.transfer(amount);
    }
    
    
    function checkBalance() 
        public view 
        returns(uint256) 
    {
        return(address(this).balance);
    }
}
