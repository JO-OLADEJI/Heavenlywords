import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Form.module.css';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import { payForNft } from '../../utils/Interact.js';

const Form = (props) => {
  const [btnActive, setBtnActive] = useState(false);
  const [btnValue, setBtnValue] = useState('MINT');
  const API = 'http://localhost:3001';
  const artCost = '0.02'; //ethers

  const animateButton = () => {
    setBtnActive(true);
    setBtnValue('');
  }

  const mintHandler = async (e) => {
    e.preventDefault();
    const addr = props.walletAddress;
    animateButton();

    // -> payment for NFT. if through, mint
    const txDetails = await payForNft(artCost);
    if (txDetails.success) {
      const nftTxHash = await axios.post(`${API}/mint`, { addr });
      setBtnActive(false);
      setBtnValue(<i className="fas fa-check-double" />);
      setTimeout(() => {
        setBtnValue('MINT');
      }, 3 * 1000);

      props.setTxHash(txDetails.hash.hash);
      console.log(txDetails.hash.hash);
      console.log({ nftTxHash });
    }
    else {
      console.log(txDetails);
    }
  }

  return (
    <div className={styles['form']}>
      <div className={styles['warning']}>
        {props.warning}
      </div>
      <Input
        placeholder="word 1"
        value={props.words[0]}
        onChange={(e) => props.handleInputChange(e, props.setWords[0])}
      />
      <Input
        placeholder="word 2"
        value={props.words[1]}
        onChange={(e) => props.handleInputChange(e, props.setWords[1])}
      />
      <Input
        placeholder="word 3"
        value={props.words[2]}
        onChange={(e) => props.handleInputChange(e, props.setWords[2])}
      />
      <Input
        placeholder="word 4"
        value={props.words[3]}
        onChange={(e) => props.handleInputChange(e, props.setWords[3])}
      />
      <Input
        placeholder="word 5"
        value={props.words[4]}
        onChange={(e) => props.handleInputChange(e, props.setWords[4])}
      />
      <Input
        placeholder="word 6"
        value={props.words[5]}
        onChange={(e) => props.handleInputChange(e, props.setWords[5])}
      />
      <Input
        placeholder="word 7"
        value={props.words[6]}
        onChange={(e) => props.handleInputChange(e, props.setWords[6])}
      />
      <div className={styles['mint-region']}>
        <Button
          className={styles['mint-btn']}
          // disabled={true}
          onClick={async (e) => mintHandler(e)}>
          {btnValue}
        </Button>
        <div className={styles['signal-indicator']}>
          {btnActive ? (
            <div><i className="fas fa-spinner" /></div>
          ) : ''}
        </div>
      </div>
    </div>
  );
}
 
export default Form;