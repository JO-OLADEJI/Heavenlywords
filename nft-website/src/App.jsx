import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Form from './components/main/Form.jsx';
import Header from './components/main/Header.jsx';
import Nav from './components/main/Nav.jsx';
import Visual from './components/main/Visual.jsx';
import TxHash from './components/main/TxHash.jsx';
import { connectWallet, getCurrentWalletConnected } from './utils/Interact.js';

const App = () => {
  // form state
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');
  const [word5, setWord5] = useState('');
  const [word6, setWord6] = useState('');
  const [word7, setWord7] = useState('');

  // wallet info state
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const [txHash, setTxHash] = useState('');



  // listeners
  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }



  // functions
  useEffect(() => {
    const getWalletInfo = async () => {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
    }
    getWalletInfo();
    addWalletListener();
  }, []);

  const connectWalletPressed = async (event) => { //TODO: implement
    event.preventDefault();
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const handleInputChange = (e, fn) => {
    fn(() => (e.target.value).trim());
  }

  const handleTxHashChange = (hash) => {
    setTxHash(() => hash);
  }

  const resetInputs = () => {
    setWord1('');
    setWord2('');
    setWord3('');
    setWord4('');
    setWord5('');
    setWord6('');
    setWord7('');
  }



  return (
    <div className={styles['App']}>
      <div className={styles['top-bar']} />

      <Nav 
        walletAddress={walletAddress}
        onConnectWallet={connectWalletPressed}
      />
      <Header />
      <div className={styles['form-body']}>
        <Form 
          words={[word1, word2, word3, word4, word5, word6, word7]}
          setWords={[setWord1, setWord2, setWord3, setWord4, setWord5, setWord6, setWord7]}
          handleInputChange={handleInputChange}
          warning={status}
          walletAddress={walletAddress}
          setTxHash={handleTxHashChange}
          resetInputs={resetInputs}
        />
        <Visual />
      </div>
      {txHash.length > 0 ? <TxHash txHash={txHash} /> : ''}
      
      <div className={styles['bottom-bar']} />
    </div>
  );
}

export default App;