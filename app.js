import express from 'express';

import { Storage } from './src/data/Storage.js';

const app = express();
const port = 8080;

if (Storage.data.links === undefined) {
  Storage.data.links = [];
  Storage.write();
}

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
