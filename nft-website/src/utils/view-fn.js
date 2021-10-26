require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0xF62275348b896d29F8e4b763dcFe30D0d8B9fa57";


// -> contract view functions
export const getBalance = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const bal = await heavenlywords.methods.getBalance().call({ from: window.ethereum.selectedAddress });

    return {
      success: true,
      result: bal.toString()
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




export const getRevaledTokens = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getRevaledTokens().call({ from: window.ethereum.selectedAddress });
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




export const getPresale = async () => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getPresale().call({ from: window.ethereum.selectedAddress });
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




export const getUriById = async (id) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getUriById(id).call({ from: window.ethereum.selectedAddress });
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




export const getAddressById = async (id) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.getAddressById(id).call({ from: window.ethereum.selectedAddress });
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




export const isWhitelisted = async (addr) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const value = await heavenlywords.methods.isWhitelisted(addr).call({ from: window.ethereum.selectedAddress });
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