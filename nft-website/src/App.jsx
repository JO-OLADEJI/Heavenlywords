import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connectWallet, getCurrentWalletConnected } from './utils/Interact.js';
import styles from './App.module.css';
import Mint from './components/pages/Mint.jsx';
import Admin from './components/pages/Admin.jsx';
import Nav from './components/main/Nav.jsx';
import Landing from './components/pages/Landing.jsx';
import Footer from './components/main/Footer.jsx';

const App = () => {
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const [asyncOperation, setAsyncOperation] = useState(false);


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
    } 
    else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
            You must install Metamask, a virtual Ethereum wallet, in your browser.
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


  return (
    <Router>
      <div className={styles['App']}>
        <Nav
          walletAddress={walletAddress}
          asyncOperation={asyncOperation}
          onConnectWallet={connectWalletPressed}
        />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/mint">
            <Mint
              status={status}
              walletAddress={walletAddress}
            />
          </Route>
          <Route path="/admin">
            <Admin
              walletAddress={walletAddress}
              setAsyncOperation={setAsyncOperation}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;