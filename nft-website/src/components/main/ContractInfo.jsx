import React, { useState } from 'react';

import { 
  getMintCount, 
  getImageDescById,
} from '../../utils/view-fn.js';

import styles from '../styles/ContractInfo.module.css';
import Button from '../UI/Button.jsx';
import Input from '../UI/Input.jsx';

const ContractInfo = (props) => {
  const [id, setId] = useState('');
  const [mintCount, setMintCount] = useState('');
  const [imageDesc, setImageDesc] = useState('');

  return (
    <section className={styles['contract-info']}>
      <div className={styles['mint-count']}>
        <h5> Tokens <i className="fas fa-flag" /> minted</h5>
        <Button
          onClick={async (e) => {
            e.preventDefault();
            props.setAsyncOperation(true);
            const count = await getMintCount();
            if (count) props.setAsyncOperation(false);
            console.log(count);
          }}>
          Get Count
        </Button>
        <h3>
          {mintCount}
        </h3>
      </div>

      <div className={styles['id-image-desc']}>
        <h5>ID <i className="fas fa-arrow-circle-right" /> Image description</h5>
        <Input
          type="number"
          min="1"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="token ID"
        />
        <Button
          onClick={async (e) => {
            e.preventDefault();
            props.setAsyncOperation(true);
            const imgDesc = await getImageDescById(id);
            if (imgDesc) props.setAsyncOperation(false);
            console.log(imgDesc);
          }}>
          Get description
        </Button>
        <h3>
          <i className="fas fa-tags" />
          {imageDesc}
        </h3>
      </div>
    </section>
  );
}
 
export default ContractInfo;