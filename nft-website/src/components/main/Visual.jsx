import React from 'react';
import styles from '../styles/Visual.module.css';
import ImageSlider from './ImageSlider.jsx';

const Visual = (props) => {
  return (
    <div className={styles['visual']}>
      <ImageSlider />
    </div>
  );
}
 
export default Visual;