require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('../contract-abi.json');
const contractAddress = "0xc5a86FCfbC84BB38F8D0B261395Ab48A72138Cfb";




export const transfer = async (addr, amount) => {
  // -> load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  // -> set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    'data': window.contract.methods.transferEther(addr, amount).encodeABI(), //make call to NFT smart contract 
  };

  // -> sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
    };
  }
  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    };
  }
}




export const witdraw = async (amount) => {
  // -> load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  // -> set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    'data': window.contract.methods.withdrawEther(amount).encodeABI(), //make call to NFT smart contract 
  };

  // -> sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
    };
  }
  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    };
  }
}




export const whitelistAddr = async (addr) => {
  // -> load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  // -> set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    'data': window.contract.methods.whitelistAddress(addr).encodeABI(), //make call to NFT smart contract 
  };

  // -> sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
    };
  }
  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    };
  }
}




export const checkBal = async () => {
  // -> load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  // -> call the smart contract method
  try {
    const value = await window.contract.methods.checkBalance().call({ from: window.ethereum.selectedAddress });
    return {
      success: true,
      result: value
    };
  }
  catch (err) {
    return {
      success: false,
      result: err
    };
  }
}




export const getTokensMinted = async () => {
  // -> load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  // -> call the smart contract's method
  try {
    const value = await window.contract.methods.getMintCount().call({ from: window.ethereum.selectedAddress });
    return {
      success: true,
      result: value
    };
  }
  catch (err) {
    return {
      success: false,
      result: err
    };
  }
}


