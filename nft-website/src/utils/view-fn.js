import BN from 'bn.js';
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0xF4bab693a5C95Bcd23F0504D37337b45EF801b42";


// -> contract view functions
export const getBalance = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const bal = await heavenlywords.methods.getBalance().call({ from: window.ethereum.selectedAddress });
    const weiValue = await new BN(bal, 10);
    const oneGwei = new BN('1000000000', 10);
    const gweiValue = await weiValue.div(oneGwei).toString(10);
    const oneEth = 1000000000;
    const ethValue = await parseInt(gweiValue) / oneEth;

    return {
      success: true,
      result: ethValue
    };
  }
  catch (err) {
    return {
      success: false,
      result: err
    };
  }
}




export const getInitialURI = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getInitialURI().call({ from: window.ethereum.selectedAddress });
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




export const getMaxSupply = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getMaxSupply().call({ from: window.ethereum.selectedAddress });
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




export const getOwner = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getOwner().call({ from: window.ethereum.selectedAddress });
    return {
      success: true,
      result: value.toLowerCase()
    };
  }
  catch (err) {
    return {
      success: false,
      result: ''
    };
  }
}




export const getPaused = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getPaused().call({ from: window.ethereum.selectedAddress });
    return {
      success: true,
      result: value
    };
  }
  catch (err) {
    return {
      success: false,
      result: ''
    };
  }
}




export const getCost = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getCost().call({ from: window.ethereum.selectedAddress });
    return {
      success: true,
      result: value.toString()
    };
  }
  catch (err) {
    return {
      success: false,
      result: 0
    };
  }
}




export const getMintCount = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getMintCount().call({ from: window.ethereum.selectedAddress });
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




export const getImageDescById = async (id) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getImageDescById(id).call({ from: window.ethereum.selectedAddress });
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




export const isAdmin = async (addr) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.isAdmin(addr).call({ from: window.ethereum.selectedAddress });
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