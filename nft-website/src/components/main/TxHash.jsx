import React from 'react';
import styles from '../styles/TxHash.module.css';

const TxHash = (props) => {
  return (
    <div className={styles['tx-hash']}>
      <i className="fas fa-hashtag" />
      <p>
        Transaction Hash - 
        <span>{props.txHash.substring(0, 10) + '...' + props.txHash.substring(60)}</span>
      </p>
      <i 
        className={`far fa-copy ${styles['copy-btn']}`}
        onClick={() => navigator.clipboard.writeText(props.txHash)}
      />
    </div>
  );
}

export default TxHash;