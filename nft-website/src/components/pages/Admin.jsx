import React from 'react';
import styles from '../styles/Admin.module.css';

const Admin = (props) => {
  return (
    <div className={styles['admin']}>
      <h1>Admin panel</h1>
    </div>
  );
}

export default Admin;


/* - METHODS

>> Airdrop (address, tokenURI)

>> Withdraw ether (amount)

>> Transfer ether (address, amount)

>> checkbalance ()

>> setPresale --switch

>> setCost (amount)

>> get total tokens minted ()

>> whitelist addresses (address[])

>> get all whitelisted addresses ()

>> get all whitelisted addresses ()

*/