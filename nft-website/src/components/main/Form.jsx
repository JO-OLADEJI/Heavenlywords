import React, { useEffect, useState } from 'react';
import styles from '../styles/Form.module.css';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import { mint } from '../../utils/mint-fn.js';

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


  const mintHandler = async (e) => {
    e.preventDefault();

    if (imageDesc.trim() === '') {
      console.log('Empty image description ...');
      return;
    }
    // console.log({ imageDesc });
    setBtnActive(true);
    const txDetails = await mint(imageDesc);
    if (txDetails.success) {
      resetInputs();
      props.setTxHash(txDetails.hash);
      setBtnActive(false);
    }
    else {
      setBtnActive(false);
    }
    console.log(txDetails);
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
          // disable={true}
          onClick={async (e) => mintHandler(e)}>
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
    </div>
  );
}
 
export default Form;