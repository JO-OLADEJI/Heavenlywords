// -> wallet connection
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



// -> wallet info - incase of page refresh
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
      ),
      address: ''
    };
  }
};