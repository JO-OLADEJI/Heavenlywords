import React from 'react';
import styles from '../styles/Landing.module.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../main/ImageSlider.jsx';
// import anonymous from '../../assets/anon.jpg';
// import gritcult from '../../assets/gritcult.jpeg';

const Landing = (props) => {
  return (
    <div className={styles['landing']}>
      <section className={styles['hero']}>
        <h1>
          Words are a way to communicate to the DIVINE.
          <br />
          Unlock a message from beyond!
        </h1>
        <p>Heavenly Words Cult is using AI to communicate and conjure up a message via NFTs from the ether.</p>
        <Link to="/mint">
          <button className={styles['mint-ref']}>
            initiate and mint a HEAVENLY WORD
            <i className="fas fa-dove" />
          </button>
        </Link>
      </section>

      <section className={styles['carousel']}>
        <p>
          We are the first project to use STACK GAN AI and esoteric and holistic approaches to bring you a communion from the heavens in the form of unique nfts with endless possibilities that you conjure. <b> Allow your creativity to summon the divine . . . </b>
        </p>
        <ImageSlider />
      </section>

      {/* <section className={styles['team']} id="team">
        <h1>Meet the team.</h1>
        <p>We are commited to making a distinctive contribution in the NFT space.</p>
        <div className={styles['members']}>
          <div className={`${styles['gritcult']} ${styles['member']}`}>
            <img 
              src={gritcult}
              alt="gritcult's avatar" 
            />
            <h3>Gritcult</h3>
            <p>Spreading innovation and creative energy by cult.</p>
            <a href="https://twitter.com/GRITCULT?t=wEjPzxaMXbyGBYHMTMF1uw&s=09" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <div className={`${styles['tommy']} ${styles['member']}`}>
            <img 
              src={anonymous} 
              alt="tommy's avatar" 
            />
            <h3>Tommy</h3>
            <p>Building solutions and teams for web3.</p>
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
      </section> */}
    </div>
  );
}

export default Landing;