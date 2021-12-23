import React, { useEffect, useState } from 'react';
import styles from '../styles/Form.module.css';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import { mint } from '../../utils/mint-fn.js';
import { getMintCount } from '../../utils/view-fn.js';

const Form = (props) => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');
  const [word5, setWord5] = useState('');
  const [word6, setWord6] = useState('');
  const [word7, setWord7] = useState('');
  const [imageDesc, setImageDesc] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  // -> functions
  useEffect(() => {
    const chunks = [ word1, word2, word3, word4, word5, word6, word7 ];
    const desc = chunks.join(' ');
    setImageDesc(() => desc.trim());
  }, [ word1, word2, word3, word4, word5, word6, word7 ]);


  const resetInputs = () => {
    setWord1('');
    setWord2('');
    setWord3('');
    setWord4('');
    setWord5('');
    setWord6('');
    setWord7('');
  }

  const getWordCount = () => {
    let wordCount = 0;
    wordCount = word1.trim() === "" ? wordCount : wordCount + 1;
    wordCount = word2.trim() === "" ? wordCount : wordCount + 1;
    wordCount = word3.trim() === "" ? wordCount : wordCount + 1;
    wordCount = word4.trim() === "" ? wordCount : wordCount + 1;
    wordCount = word5.trim() === "" ? wordCount : wordCount + 1;
    wordCount = word6.trim() === "" ? wordCount : wordCount + 1;
    wordCount = word7.trim() === "" ? wordCount : wordCount + 1;

    return wordCount;
  }


  const mintHandler = async (e) => {
    e.preventDefault();

    if (getWordCount() < 3) {
      alert('Image description must be 3 or more words!');
      return;
    }
    setBtnActive(true);
    const txDetails = await mint(imageDesc);
    if (txDetails.success) {
      resetInputs();
      const latestTokenId = await getMintCount();
      props.setTokenId(latestTokenId);
      setBtnActive(false);
    }
    else {
      setBtnActive(false);
    }
  }

  
  return (
    <div className={styles['form']}>
      <div className={styles['warning']}>
        {props.warning}
      </div>
      <Input
        placeholder="word 1"
        value={word1}
        onChange={(e) => setWord1((e.target.value).trim())}
      />
      <Input
        placeholder="word 2"
        value={word2}
        onChange={(e) => setWord2((e.target.value).trim())}
      />
      <Input
        placeholder="word 3"
        value={word3}
        onChange={(e) => setWord3((e.target.value).trim())}
      />
      <Input
        placeholder="word 4"
        value={word4}
        onChange={(e) => setWord4((e.target.value).trim())}
      />
      <Input
        placeholder="word 5"
        value={word5}
        onChange={(e) => setWord5((e.target.value).trim())}
      />
      <Input
        placeholder="word 6"
        value={word6}
        onChange={(e) => setWord6((e.target.value).trim())}
      />
      <Input
        placeholder="word 7"
        value={word7}
        onChange={(e) => setWord7((e.target.value).trim())}
      />
      <div className={styles['mint-region']}>
        <Button
          className={styles['mint-btn']}
          onClick={async (e) => {
            // check to see that an address is connected
            if (props.walletAddress.trim().length === 0) {
              alert('you have to connect your wallet before minting!');
              return;
            }
            mintHandler(e);
          }}>
          MINT
        </Button>
        {btnActive ? (<div className={styles['signal-indicator']}>
          <div>
            <span className={styles['dot']} />
            <span className={styles['dot']} />
            <span className={styles['dot']} />
          </div>
        </div> ) : ''}
      </div>
      <div className={styles['pricing']}>
        <pre>Price:  <i className="fab fa-ethereum" /> .0777 + Gas fee</pre>
      </div>
    </div>
  );
}
 
export default Form;