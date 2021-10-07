require('dotenv').config();
const axios = require('axios');
const key = process.env.HEAVENLYWORDS_PINATA_KEY;
const secret = process.env.HEAVENLYWORDS_PINATA_SECRET;


export const pinJSONToIPFS = async (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    //making axios POST request to Pinata ⬇️
    return axios 
      .post(url, JSONBody, {
        headers: {
          pinata_api_key: key,
          pinata_secret_api_key: secret,
        }
      })
      .then(function (response) {
        return {
          success: true,
          pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
        };
      })
      .catch(function (error) {
        console.log(error)
        return {
          success: false,
          message: error.message,
        }
    });
};