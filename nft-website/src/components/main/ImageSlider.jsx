import React, { useState } from 'react';
import styles from '../styles/ImageSlider.module.css';

// assets
import { sliderData } from '../../data/SliderData.js';

const ImageSlider = (props) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [imgState, setImgState] = useState('');

  const nextSlideHandler = () => {
    const newValue = currentImg === sliderData.length - 1 ? 0 : currentImg + 1;
    setCurrentImg(() => newValue);
    setImgState(() => 'active');
  }

  const prevSlideHandler = () => {
    const newValue = currentImg === 0 ? sliderData.length - 1 : currentImg - 1;
    setCurrentImg(() => newValue);
    setImgState(() => 'active');
  }

  return (
    <div className={styles['image-slider']}>
      <div>
        <i 
          className="fas fa-chevron-left" 
          onClick={prevSlideHandler}
        />
        <img 
          className={`${styles['slider-img']} ${styles[imgState]}`}
          key={sliderData[currentImg].id}
          src={sliderData[currentImg].image}
          alt={sliderData[currentImg].phrase}
        />
        <i 
          className="fas fa-chevron-right"
          onClick={nextSlideHandler}
        />
      </div>
      <p>"{sliderData[currentImg].phrase}"</p>
    </div>
  );
}

export default ImageSlider;