require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0xF4bab693a5C95Bcd23F0504D37337b45EF801b42";



// -> only contract owner can execute the following functions
export const withdraw = async (amount) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    'data': heavenlywords.methods.withdraw(amount).encodeABI(),
  };

  // -> sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" + txHash
    };
  }
  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    };
  }
}




export const transfer = async (addr, amount) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    'data': heavenlywords.methods.transfer(addr, amount).encodeABI(),
  };

  // -> sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });

    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" + txHash
    };
  }
  catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    };
  }
}