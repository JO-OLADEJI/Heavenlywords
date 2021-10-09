const axios = require('axios');
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;


export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  // -> making axios POST request to Pinata ⬇️
  try {
    const response = await axios.post(
      url, 
      JSONBody, 
      {headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      }}
    );
    const fileHash = await response.data.IpfsHash;
    return {
      success: true,
      pinataUrl: "https://gateway.pinata.cloud/ipfs/" + fileHash
    };
  }
  catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    }
  }
};