// import BN from 'bn.js';
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0xd76F284881b929be62A1b1c7781e9649b32f7985";


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




export const getMintCount = async (id) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getMintCount(id).call({ from: window.ethereum.selectedAddress });
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