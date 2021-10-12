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
    bool public presale = true;
    bool public paused = false;
    uint256 public maxSupply = 7777;
    uint256 public cost = 0.07 ether;
    uint256 public airdropTokenId = 0;
    address[] whitelistedAddresses;
    


    // -> contract constructor
    constructor() public ERC721("MyNFT", "NFT") {}



    // -> contract methods
    function mintNFT(address _recipient, string memory _tokenURI)
        public payable
        returns (uint256)
    {
        if (presale)
        {
            // check if the address is whitelisted
            require(isAddressWhitelisted(_recipient), 'Only whitelisted addresses can mint during presale');
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
    
    
    
    function airDrop(address _recipient, string memory _tokenURI)
        public onlyOwner
        returns(uint256)
    {
        if (presale)
        {
            // check if the address is whitelisted
            require(isAddressWhitelisted(_recipient), 'Only whitelisted addresses can mint during presale');
        }
        
        require(!paused, 'Minting is paused');
        ++airdropTokenId;
        
        // check if tokens are not up to max supply
        require(airdropTokenId <= maxSupply);
        
        _mint(_recipient, airdropTokenId);
        _setTokenURI(airdropTokenId, _tokenURI);

        return airdropTokenId;
    }



    function withdrawEther(uint256 _amount) 
        public onlyOwner
    {
        payable(msg.sender).transfer(_amount);
    }
    
    
    
    function transferEther(address payable _addr, uint256 _amount) 
        public onlyOwner
    {
        _addr.transfer(_amount);
    }
    
    
    
    function checkBalance() 
        public view 
        onlyOwner
        returns(uint256) 
    {
        return(address(this).balance);
    }
    
    
    
    function setPresale(bool _value)
        public onlyOwner
    {
        presale = _value;
    }
    
    
    
    function setCost(uint256 _newCost) 
        public onlyOwner
    {
        cost = _newCost;
    }
    
    
    
    function getTotalMinted()
        public view
        returns(uint256)
    {
        return _tokenIds.current();
    }
    
    
    
    function whitelistAddresses(address[] memory _addrs)
        public onlyOwner
    {
        for (uint256 i = 1; i <= _addrs.length; i++)
        {
            whitelistedAddresses.push(_addrs[i]);
        }
    }
    
    
    
    function getWhitelistedAddresses()
        public view
        onlyOwner
        returns(address[] memory)
    {
        return whitelistedAddresses;
    }
    
    
    
    function allWhitelistedAddresses()
        public view
        onlyOwner returns(address[] memory)
    {
        return whitelistedAddresses;
    }
    
    
    
    function isAddressWhitelisted(address _addr)
        public view
        onlyOwner returns(bool)
    {
        for (uint256 i = 1; i <= whitelistedAddresses.length; i++)
        {
            if (whitelistedAddresses[i] == _addr)
            {
                return true;
            }
        }
        
        return false;
    }
    
}
















