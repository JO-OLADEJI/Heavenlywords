import React, { useState } from 'react';
import { whitelistAddr, transfer, withdraw, checkBal, getTokensMinted } from '../../utils/ContractMethods.js';
import styles from '../styles/Admin.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const Admin = (props) => {
  const [balance, setBalance] = useState('');
  const [mintCount, setMintCount] = useState('');
  const [addrToWhitelist, setAddrToWhitelist] = useState('-');

  const [withdrawAmt, setWithdrawAmt] = useState(0);
  const [transferAmt, setTransferAmt] = useState(0);
  const [transferAddr, setTransferAddr] = useState('-');

  
  // -> functions
  const whitelistAddrHandler = async (e, address) => {
    e.preventDefault();
    const result = await whitelistAddr(address);
    result.success ? 
      setAddrToWhitelist(() => '-') : console.log(result.status);
  }

  const withdrawHandler = async (e, amount) => {
    e.preventDefault();
    const result = await withdraw(amount);
    result.success ? 
      setWithdrawAmt(() => '-') : console.log(result.status);
  }

  const transferHandler = async (e, addr, amount) => {
    e.preventDefault();
    const result = await transfer(addr, amount);
    if (result.success) {
      setTransferAmt(() => 0);
      setTransferAddr(() => '-');
    }
    else {
      console.log(result.status);
    }
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


  return (
    <div className={styles['admin']}>

      <div className={styles['methods']}>
        <div className={styles['withdraw']}>
          <h5>Withdraw ETH</h5>
          <Input 
            value={withdrawAmt}
            onChange={(e) => setWithdrawAmt(e.target.value)}
            placeholder="wei value"
          />
          <Button
            onClick={(e) => withdrawHandler(e, withdrawAmt)}>
            Withdraw
          </Button>
        </div>
        <div className={styles['transfer']}>
          <h5>Transfer ETH</h5>
          <Input 
            value={transferAddr}
            onChange={(e) => setTransferAddr(e.target.value)}
            placeholder="eth address"
          />
          <Input 
            value={transferAmt}
            onChange={(e) => setTransferAmt(e.target.value)}
            placeholder="wei value"
          />
          <Button
            onClick={(e) => transferHandler(e, transferAddr, transferAmt)}>
            Transfer
          </Button>
        </div>
        <div className={styles['wl-addr']}>
          <h5>Whitelist Address</h5>
          <Input 
            value={addrToWhitelist}
            onChange={(e) => setAddrToWhitelist(e.target.value)}
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
          <h5>Contract ETH balance</h5>
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
          <h5>Total tokens minted</h5>
          <Button
            onClick={(e) => mintCountHandler(e)}>
            Get Count
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