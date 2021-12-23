import React from 'react';
import styles from '../styles/Success.module.css';

const Success = (props) => {
  return (
    <div className={styles['success']}>
      <i className={`${styles['tick']} far fa-check-circle`} />
      <div>
        <h2>mint success</h2>
        <a
          href={`https://opensea.io/assets/0x58c14f43cbc58cb7bf641c521e2360941f957bf9/${props.tokenId}`}
          target="_blank"
          rel="noreferrer">
          View on OpenSea
        </a>
      </div>

      <i 
        className={`${styles['close']} far fa-times-circle`} 
        onClick={() => props.setTokenId('')}
      />
    </div>
  );
}

export default Success;