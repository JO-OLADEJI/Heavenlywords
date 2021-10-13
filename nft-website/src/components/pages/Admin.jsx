import React, { useState } from 'react';
import styles from '../styles/Admin.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const Admin = (props) => {
  const [balance, setBalance] = useState('');
  const [mintCount, setMintCount] = useState(0);

  return (
    <div className={styles['admin']}>

      <div className={styles['methods']}>
        {/* <h3>Methods (<i className="fab fa-ethereum" /> gas)</h3> */}
        <div className={styles['airdrop']}>
          <h5>Airdrop NFT</h5>
          <Input 
            placeholder="eth address"
          />
          <Input 
            placeholder="meta-data uri"
          />
          <Button>
            Airdrop
          </Button>
        </div>
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
        <div className={styles['set-cost']}>
          <h5>Set NFT cost</h5>
          <Input 
            placeholder="eth value"
          />
          <Button>
            Set Cost
          </Button>
        </div>
        <div className={styles['wl-addr']}>
          <h5>Whitelist Address</h5>
          <Input 
            placeholder="eth address"
          />
          <Button>
            Whitelist
          </Button>
        </div>
      </div>

      <div className={styles['views']}>
        {/* <h3>Views</h3> */}
        <div className={styles['check-balance']}>
          <Button>
            Check Balance
          </Button>
          <h3>
            <i className="fab fa-ethereum" />
            - - -
          </h3>
        </div>
        <div className={styles['mint-count']}>
          <Button>
            Tokens Minted(n)
          </Button>
          <h3>
            <i className="fas fa-flag" />
            - - - 
          </h3>
        </div>
      </div>

    </div>
  );
}

export default Admin;