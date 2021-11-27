import React, { useEffect, useState } from 'react';
import styles from '../styles/Mint.module.css';
import Form from '../main/Form.jsx';
import Header from '../main/Header.jsx';
import TxHash from '../main/TxHash.jsx';
import Details from '../main/Details.jsx';

const Mint = (props) => {
  const [launch, setLaunch] = useState(false);
  const [txHash, setTxHash] = useState('');
  const mintTime = 1638025200000;

  const checkLaunch = () => {
    const runCheck = setInterval(() => {
      const now = new Date().getTime();
      const gap = mintTime - now;

      if (gap <= 0) {
        setLaunch(true);
        clearInterval(runCheck);
      }
    }, 1 * 1000);
  }

  useEffect(() => {
    checkLaunch();
  }, []);

  return (
    <div className={styles['mint']}>
      {launch 
      ?
      (<div>
        <Header />
        <div className={styles['form-body']}>
          <Form 
            setTxHash={setTxHash}
            warning={props.status}
            walletAddress={props.walletAddress}
          />
        </div>
        <p>{txHash.length > 0 ? <TxHash txHash={txHash} /> : ''}</p>
      </div>)
      :
      <Details />
      }
    </div>
  );
}

export default Mint;