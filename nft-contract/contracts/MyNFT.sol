// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Heavenlywords is ERC721URIStorage {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    
    // -> contract variables
    bool public presale = true;
    bool public paused = false;
    uint256 public maxSupply = 7777;
    uint256 public cost = 0.07 ether;
    string public initialURI = 'https://gateway.pinata.cloud/ipfs/QmR19vvqHwetfFprdC3VsVCdJgNVFTMeCbucTWhPvQ1Pf1';
    // uint256 private revealedTokens = 0;
    address public contractOwner;
    mapping (address => bool) public admins;
    mapping (address => bool) public whitelist;
    mapping (uint256 => string) public idToImageDesc;
    

    // -> contract constructor
    constructor() ERC721("Heavenlywords", "HWs") {
        contractOwner = msg.sender;
        admins[msg.sender] = true;
    }


    // -> modifiers
    modifier onlyOwner {
        require(msg.sender == contractOwner);
        _;
    }

    modifier onlyAdmin {
        require(admins[msg.sender]);
        _;
    }


    // -> contract methods
    function mint(address _recipient, string memory _imageDesc)
        public 
        payable
        returns (uint256)
    {
        require(!paused, 'Minting is paused');
        
        if (msg.sender != contractOwner)
        {
            if (presale)
            {
                require(isWhitelisted(_recipient));
            }
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
    
    
    function updateURIs(uint256[] memory _IDs, string[] memory _URIs)
        public
        onlyAdmin
    {
        require(_IDs.length == _URIs.length);
        for(uint256 i = 0; i < _IDs.length; i++)
        {
            _setTokenURI(_IDs[i], _URIs[i]);
        }
    }
    
    
    function updateOneURI(uint256 _ID, string memory _URI)
        public
        onlyAdmin
    {
        _setTokenURI(_ID, _URI);
    }


    function withdraw(uint256 _amount)
        public
        onlyOwner
    {
        payable(msg.sender).transfer(_amount);
    }
    
    
    
    function transfer(address payable _addr, uint256 _amount) 
        public
        onlyOwner
    {
        _addr.transfer(_amount);
    }
    
    
    function getBalance() 
        public 
        view 
        onlyAdmin
        returns(uint256) 
    {
        return(address(this).balance);
    }


    function getInitialURI()
        public
        view
        returns(string memory)
    {
        return initialURI;
    }


    function setInitialURI(string memory _newURI)
        public
        onlyAdmin
    {
        initialURI = _newURI;
    }


    function getMaxSupply()
        public
        view
        returns(uint256)
    {
        return maxSupply;
    }


    function setMaxSupply(uint256 _value)
        public
        onlyOwner
    {
        maxSupply = _value;
    }


    function getOwner()
        public
        view
        returns(address)
    {
        return contractOwner;
    }


    function getPresale()
        public
        view
        returns(bool)
    {
        return presale;
    }
    
    
    function setPresale(bool _value)
        public
        onlyAdmin
    {
        presale = _value;
    }


    function getPaused()
        public
        view
        returns(bool)
    {
        return paused;
    }
    
    
    function setPaused(bool _value)
        public
        onlyAdmin
    {
        paused = _value;
    }
    

    function getCost()
        public
        view
        returns(uint256)
    {
        return cost;
    }
    
    
    function setCost(uint256 _newCost) 
        public
        onlyOwner
    {
        cost = _newCost;
    }
    
    
    function getMintCount()
        public 
        view
        onlyAdmin
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
    
    
    function whitelistAddress(address _addr)
        public
        onlyAdmin
    {
        whitelist[_addr] = true;
    }
    
    
    function whitelistBatch(address[] memory _addrs)
        public
        onlyAdmin
    {
        for(uint256 i = 0; i < _addrs.length; i++)
        {
            whitelist[_addrs[i]] = true;
        }
    }
    
    
    function removeFromWhitelist(address _addr)
        public
        onlyAdmin
    {
        whitelist[_addr] = false;
    }
    
    
    function removeBatch(address[] memory _addrs)
        public
        onlyAdmin
    {
        for(uint256 i = 0; i < _addrs.length; i++)
        {
            whitelist[_addrs[i]] = false;
        }
    }


    function setAdmin(address _addr)
        public
        onlyOwner
    {
        admins[_addr] = true;
    }


    function removeAdmin(address _addr)
        public
        onlyOwner
    {
        admins[_addr] = false;
    }


    function isAdmin(address _addr)
        public
        view
        returns(bool)
    {
        return admins[_addr];
    }
    
    
    function isWhitelisted(address _addr)
        public 
        view
        returns(bool)
    {
        return whitelist[_addr];
    }
    
}