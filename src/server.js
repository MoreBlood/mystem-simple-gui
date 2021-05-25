
const MyStem = require('mystem3');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3004;

app.use(express.json());
app.use(cors());

var myStem = new MyStem();
myStem.start();

app.post('/mystem', (req, res) => {
  const body = req.body;

  const words = body.input.match(/[\wа-я]+|[\w]+|\"[\w\s]+\"/ig);

  console.log(words);

  const tasks = words.map(word => myStem.lemmatize(word));

  Promise.all(tasks)
    .then(result => result.join(', '))
    .then((result) => res.json({ result }))
    .catch(res.send)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

