import express from 'express';

import { Storage } from './src/data/Storage.js';

import { cutURL } from './src/cutURL.js';

const app = express();
const port = 8080;

app.use(express.json());

if (Storage.data.links === undefined) {
  Storage.data.links = [];
  Storage.write();
}

app.post('/cut' /* callback*/);
app.get('/[a-f0-9]{5}', cutURL);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
