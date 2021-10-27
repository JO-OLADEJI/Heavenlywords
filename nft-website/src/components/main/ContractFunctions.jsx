import React, { useState } from 'react';

import {
  reveal,
  updateOneURI,
  whitelistAddress
} from '../../utils/admin-fn.js'

import {
  withdraw,
  transfer
} from '../../utils/transaction-fn.js';

import styles from '../styles/ContractFunctions.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const ContractFunctions = (props) => {
  const [id, setId] = useState('');
  const [ipfsURI, setIpfsURI] = useState('');
  const [withdrawAmt, setWithdrawAmt] = useState();
  const [addrToWhitelist, setAddrToWhitelist] = useState('');


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

      <div className={styles['whitelist-addr']}>
        <h5><i className="fas fa-list-ol" /> Whitelist Address</h5>
        <Input 
          value={addrToWhitelist}
          onChange={(e) => setAddrToWhitelist(e.target.value)}
          placeholder="eth address"
        />
        <Button
          onClick={async (e) => {
            e.preventDefault();
            props.setAsyncOperation(true);
            const result = await whitelistAddress(addrToWhitelist);
            if (result) props.setAsyncOperation(false);
            console.log(result);
          }}>
          Whitelist
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

      <div className={styles['reveal-arts']}>
        <h5>Reveal <i className="fas fa-eye" /> updated images</h5>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            props.setAsyncOperation(true);
            const res = await reveal();
            if (res) props.setAsyncOperation(false);
            console.log(res);
          }}>
          Reveal
        </Button>
      </div>
    </section>
  );
}
 
export default ContractFunctions;