import { pinJSONToIPFS } from './Pinata.js';

require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('../contract-abi.json');
const contractAddress = "0xe0D2009688b97ecdE5E58BEDb8C9370bDAC900F3";

// wallet connection
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const obj = {
        status: '👇🏾 Write image description text below.',
        address: addressArray[0]
      };
      return obj;
    }
    catch (err) {
      return {
        address: '',
        status: '😥 ' + err.message
      };
    }
  }
  else {
    return {
      address: '',
      status: (
        <span>
          <p>
            {' '}
            😿{' '}
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your browser.
            </a>
          </p>
        </span>
      )
    };
  }
};



// wallet info - incase of page refresh
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts'
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: '👇🏾 Write image description text below.'
        };
      }
      else {
        return {
          address: '',
          status: '😿 Connect to Metamask using the top right button.'
        };
      }
    }
    catch (err) {
      return {
        address: '',
        status: '😥 ' + err.message
      };
    }
  }
  else {
    return {
      status: (
        <span>
          <p>
            {' '}
            😿{' '}
            <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
              You must install Metamask, a virtual Ethereum wallet, in your browser.
            </a>
          </p>
        </span>
      )
    };
  }
};




// function to handle minting the nft
export const mintNFT = async (phrase) => {

  // -> error handling
  const paramsValid = () => {
    return phrase.trim() === '' ? false : true;
  }

  if (!paramsValid()) {
    return {
      success: false,
      status: "❗Please make sure at least 3 fields are filled before minting.",
    };
  }


  // -> make metadata
  const metadata = { };
  metadata.name = 'Heavenlywords Collection';
  metadata.description = phrase;
  metadata.image = "https://gateway.pinata.cloud/ipfs/Qmf5utYYujKkfCV13KvozKQsUD1EDnmi2x3sGCfarXLdXe";
  metadata.attributes = [{ 'trait_type': '', 'value': '' }];


  // -> make pinata call
  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;


  // -> load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);


  // -> set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI(), //make call to NFT smart contract 
    value: '470DE4DF820000' // require address to pay 0.02 ethers <value encoded to hex>
  };

  
  // -> sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash,
      hash: txHash
    };
  }
  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    };
  }
};