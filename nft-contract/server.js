const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const { connectDb } = require('./scripts/dbConnect.js');
const { Phrase } = require('./scripts/schema.js');


app.use(express.json());
app.use(cors());
connectDb();


// -> routes
app.get('/', (req, res) => {
  res.send('NFT contract Homepage');
});

app.post('/savePhrase', async (req, res) => {
  const addr = req.body.addr;
  const phrase = req.body.phrase;

  // -> save the user's pharse to DB
  Phrase.create({ addr, phrase })
  .then(() => {
    res.json({ 'success': true });
  })
  .catch((err) => {
    res.json({ 'success': false })
  })
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});