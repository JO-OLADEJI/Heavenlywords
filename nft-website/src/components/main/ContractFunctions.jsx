import React, { useState } from 'react';

import {
  updateURIs,
} from '../../utils/admin-fn.js'

import {
  withdraw,
} from '../../utils/transaction-fn.js';

import styles from '../styles/ContractFunctions.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const ContractFunctions = (props) => {
  const [startID, setStartID] = useState('');
  const [lastID, setLastID] = useState('');
  const [ipfsURIs, setIpfsURIs] = useState('');
  const [withdrawAmt, setWithdrawAmt] = useState();

  /**
   * @param {String} links - a string of all links seperated by a newline(\n)
   */
  const handleUriUpdate = async (links) => {
    const pretty = links.split('\n');
    let ids = [];
    for (let i = parseInt(startID); i <= parseInt(lastID); i++) {
      ids.push(i);
    }
    // -> if the two arrays are of same length: continue
    if (pretty.length === ids.length) {
      props.setAsyncOperation(true);
      const result = await updateURIs(ids, pretty);
      if (result) props.setAsyncOperation(false);
    }
    else {
      console.log('Discrepancy of ids and link\'s length ❗');
    }

    console.log({ pretty, ids });
  }


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
        <textarea
          value={ipfsURIs}
          onChange={(e) => setIpfsURIs(e.target.value)}
          placeholder="IPFS metadata links"
        />
        <div>
          <Input
            className={styles['start-id']}
            type="number"
            min="1"
            placeholder="start ID"
            value={startID}
            onChange={(e) => setStartID(e.target.value)}
          />
          <Input
            className={styles['last-id']}
            type="number"
            min="1"
            placeholder="last ID"
            value={lastID}
            onChange={(e) => setLastID(e.target.value)}
          />
        </div>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            handleUriUpdate(ipfsURIs);
          }}>
          Update
        </Button>
      </div>
    </section>
  );
}
 
export default ContractFunctions;