import React from 'react';
import styles from '../styles/Admin.module.css';
import ContractInfo from '../main/ContractInfo.jsx';
import ContractFunctions from '../main/ContractFunctions.jsx';

const Admin = (props) => {
  return (
    <div className={styles['admin']}>
      <ContractInfo
        setAsyncOperation={props.setAsyncOperation}
      />
      <ContractFunctions 
        setAsyncOperation={props.setAsyncOperation}
      />
    </div>
  );
}

export default Admin;