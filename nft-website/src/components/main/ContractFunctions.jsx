import React, { useState } from 'react';

import {
  updateOneURI,
} from '../../utils/admin-fn.js'

import {
  withdraw,
  // transfer
} from '../../utils/transaction-fn.js';

import styles from '../styles/ContractFunctions.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const ContractFunctions = (props) => {
  const [id, setId] = useState('');
  const [ipfsURI, setIpfsURI] = useState('');
  const [withdrawAmt, setWithdrawAmt] = useState();


  return (
    <section className={styles['contract-functions']}>
      <div className={styles['withdraw']}>
        <h5><i className="fas fa-wallet" /> Withdraw ETH</h5>
        <Input
          type="number"
          min="1"
          value={withdrawAmt}
          onChange={(e) => setWithdrawAmt(e.target.value)}
          placeholder="wei value"
        />
        <Button
          onClick={async (e) => {
            e.preventDefault();
            props.setAsyncOperation(true);
            const res = await withdraw(withdrawAmt);
            if (res) props.setAsyncOperation(false);
            console.log(res);
          }}>
          Withdraw
        </Button>
      </div>

      <div className={styles['update-uri']}>
        <h5>ID <i className="fas fa-pen-nib" /> Update token URI</h5>
        <Input
          type="number"
          min="1"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="token ID"
        />
        <Input
          value={ipfsURI}
          onChange={(e) => setIpfsURI(e.target.value)}
          placeholder="IPFS metadata link"
        />
        <Button
          onClick={async (e) => {
            e.preventDefault();
            props.setAsyncOperation(true);
            const result = await updateOneURI(id, ipfsURI);
            if (result) props.setAsyncOperation(false);
            console.log(result);
          }}>
          Update
        </Button>
      </div>
    </section>
  );
}
 
export default ContractFunctions;