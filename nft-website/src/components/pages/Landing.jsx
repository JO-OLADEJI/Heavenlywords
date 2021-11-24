import React from 'react';
import styles from '../styles/Landing.module.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../main/ImageSlider.jsx';
import Details from '../main/Details.jsx';
import anonymous from '../../assets/anon.jpg';

const Landing = (props) => {
  return (
    <div className={styles['landing']}>
      <section className={styles['hero']}>
        <h1>
          Words are Powerful. 
          <br />
          The right combination can be more!
        </h1>
        <p>Heavenlywords AI conjure up a unique NFT out of thin air.</p>
        <Link to="/mint">
          <button className={styles['mint-ref']}>
            Mint a heavenlyword
            <i className="fas fa-dove" />
          </button>
        </Link>
      </section>

      <section className={styles['carousel']}>
        <p>
          We are experimenting with holistic approaches to bring users tons of unique nfts with endless possibilities. Our priority is to create unique nfts that's <b>limited only by the creativity of your words</b>.
        </p>
        <ImageSlider />
      </section>

      <Details />

      <section className={styles['team']} id="team">
        <h1>Meet the team.</h1>
        <p>We are commited to making a distinctive contribution in the NFT space.</p>
        <div className={styles['members']}>
          <div className={`${styles['gritcult']} ${styles['member']}`}>
            <img 
              src={anonymous} 
              alt="gritcult's avatar" 
            />
            <h3>Gritcult</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, accusamus!</p>
          </div>
          <div className={`${styles['tommy']} ${styles['member']}`}>
            <img 
              src={anonymous} 
              alt="tommy's avatar" 
            />
            <h3>Tommy</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, accusamus!</p>
          </div>
          <div className={`${styles['josh']} ${styles['member']}`}>
            <img 
              src={anonymous} 
              alt="dev's avatar" 
            />
            <h3>AnalogDev</h3>
            <p>Analog by birth, digital by code.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;