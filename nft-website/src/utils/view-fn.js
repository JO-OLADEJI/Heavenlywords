// import BN from 'bn.js';
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
// const contractAddress = "0x58c14f43cbc58cb7bf641c521e2360941f957bf9";
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

// -> contract view functions
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