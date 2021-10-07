import { ethers } from 'ethers';


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



// request for ethereum payment
export const payForNft = async (ether) => {
  const storeAddr = "0x7B4af61aCDFB66127d8eE3119f2d49A6a662a367";
  try {
    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to: storeAddr,
      value: ethers.utils.parseEther(ether)
    });
    return { success: true, hash: tx };
  }
  catch (err) {
    return { success: false, err };
  }
}