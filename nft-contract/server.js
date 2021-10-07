const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const { mintNFT } = require('./scripts/mint-nft.js');
const { connectDb } = require('./scripts/dbConnect.js');
const { Phrase } = require('./scripts/schema.js');


app.use(express.json());
app.use(cors());
connectDb();


// -> routes
app.get('/', (req, res) => {
  res.send('NFT contract Homepage');
});

app.post('/mint', async (req, res) => {
  const addr = req.body.addr;
  const phrase = req.body.phrase;

  const txHash = await mintNFT(
    addr,
    "https://gateway.pinata.cloud/ipfs/QmYgLMTAvPJpWNZiDGCffJw9zJHR6JNVQTYVPRXY6M8xTb"
  );
  Phrase.create({ addr, phrase });
  return res.send(txHash);
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});