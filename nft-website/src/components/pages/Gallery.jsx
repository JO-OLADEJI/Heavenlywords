import React from 'react';
import styles from '../styles/Gallery.module.css';
import Frame from '../main/Frame.jsx';

// image assets
import image01 from '../../assets/cathedral flame waves patio amplifier triangle web.png';
import image02 from '../../assets/everything is possible for one who believes.png';
import image03 from '../../assets/god ocean pyramids gold love light atlantis.png';
import image04 from '../../assets/greed famine lust gluttony pestilence rage vengeance.png';
import image05 from '../../assets/health wealth prosperity peace wisdom love gratitude.png';
import image06 from '../../assets/heavenly words cult talked to the divine.png';
import image07 from '../../assets/simulated interstellar multiverse produces eternal synchronous timeloop.png';
import image08 from '../../assets/the law is light.png';
import image09 from '../../assets/where do the apes seek holy redemption.png';
import image10 from '../../assets/wilderness of subsystems with byzantine brass intricacy.png';
import image11 from '../../assets/anime cyberpunk neon glow orbit star luck.png';
import image12 from '../../assets/angels ancestors surround me blessing protecting me.png';


const Gallery = (props) => {
  const images = [
    { image: image01, description: 'cathedral flame waves patio amplifier tirangle web' },
    { image: image02, description: 'everything is possible for one who believes' },
    { image: image03, description: 'god ocean pyramids gold love light atlantis' },
    { image: image04, description: 'greed famine lust gluttony pestilence rage vengeance' },
    { image: image05, description: 'health wealth prosperity peace wisdom love gratitude' },
    { image: image06, description: 'heavenly words cult talked to the divine' },
    { image: image07, description: 'simulated interstellar multiverse prduces eternal synchronous timeloop' },
    { image: image08, description: 'the law is light' },
    { image: image09, description: 'where do the apes seek holy redemption' },
    { image: image10, description: 'wilderness of subsystems with byzantine brass intricacy' },
    { image: image11, description: 'anime cyberpunk neon glow orbit star luck' },
    { image: image12, description: 'angels ancestors surround me blessing protecting me' },
  ];
  const accentColors = ['#00E9D3', '#1E41DC', '#BB00E1', '#0CD683', '#E9DE00', '#E70087', '#F26FEE', '#FFFFFF', '#E4761B', '#F2300B'];

  console.log('wilderness of subsystems with byzantine brass intricacy'.length);
  console.log('health wealth prosperity peace wisdom love gratitude'.length);
  console.log('simulated interstellar multiverse prduces eternal synchronous timeloop'.length);

  return (
    <div className={styles['gallery']}>
      <h1>Heavenlywords' Gallery 😇</h1>
      <div className={styles['pictures']}>
        {images.map((data, index) => (
          <Frame
            key={index}
            image={data.image}
            description={data.description}
            accent={accentColors[Math.floor(Math.random() * accentColors.length)]}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Gallery;