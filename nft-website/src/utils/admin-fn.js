require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0xf57cCcC323D064450BdF8a1382fb24451aED10B4";



/**
 * @param {Array} IDs - token ids of the URIs
 * @param {Array} URIs - array of IPFS metadata files of the corresponding token ids
 * @returns {string} - etherscan transaction link || error message
 */
export const updateURIs = async (IDs, URIs) => {
  const heavenlywords = new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress,
    from: window.ethereum.selectedAddress,
    'data': heavenlywords.methods.updateURIs(IDs, URIs).encodeABI(),
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