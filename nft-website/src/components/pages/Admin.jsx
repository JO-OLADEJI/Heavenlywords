import React, { useState } from 'react';
import { whitelistAddr, transfer, witdraw, checkBal, getTokensMinted } from '../../utils/ContractMethods.js';
import styles from '../styles/Admin.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const Admin = (props) => {
  const [balance, setBalance] = useState('-');
  const [mintCount, setMintCount] = useState('-');
  const [addrToWhitelist, setAddrToWhitelist] = useState('');

  
  // -> functions
  const whitelistAddrHandler = async (e, address) => {
    e.preventDefault();
    const result = await whitelistAddr(address);
    console.log(result.status);
  }

  const checkBalHandler = async (e) => {
    e.preventDefault();
    const request = await checkBal();
    request.success ? 
      setBalance(() => request.result / 100000000 / 100000000 / 100) : setBalance(() => '???');
  }

  const mintCountHandler = async (e) => {
    e.preventDefault();
    const request = await getTokensMinted();
    request.success ? 
      setMintCount(() => request.result) : setMintCount(() => '???');
  }

  const whitelistAddrInputHandler = (e) => {
    setAddrToWhitelist(e.target.value);
  }

  return (
    <div className={styles['admin']}>

      <div className={styles['methods']}>
        <div className={styles['transfer']}>
          <h5>Transfer ETH</h5>
          <Input 
            placeholder="eth address"
          />
          <Input 
            placeholder="eth value"
          />
          <Button>
            Transfer
          </Button>
        </div>
        <div className={styles['withdraw']}>
          <h5>Withdraw ETH</h5>
          <Input 
            placeholder="eth value"
          />
          <Button>
            Withdraw
          </Button>
        </div>
        <div className={styles['wl-addr']}>
          <h5>Whitelist Address</h5>
          <Input 
            value={addrToWhitelist}
            onChange={whitelistAddrInputHandler}
            placeholder="eth address"
          />
          <Button
            onClick={(e) => whitelistAddrHandler(e, addrToWhitelist)}>
            Whitelist
          </Button>
        </div>
      </div>

      <div className={styles['views']}>
        <div className={styles['check-balance']}>
          <Button
            onClick={(e) => checkBalHandler(e)}>
            Check Balance
          </Button>
          <h3>
            <i className="fab fa-ethereum" />
            {balance}
          </h3>
        </div>
        <div className={styles['mint-count']}>
          <Button
            onClick={(e) => mintCountHandler(e)}>
            Tokens Minted(n)
          </Button>
          <h3>
            <i className="fas fa-flag" />
            {mintCount}
          </h3>
        </div>
      </div>

    </div>
  );
}

export default Admin;