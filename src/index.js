const express = require('express');
const appApi = require('./api');

const path = require('path');
const publicPath = path.join(__dirname, 'public');

const app = express();
const { PORT = 5000 } = process.env;

app.use('/', express.static(publicPath));

app.use('/api', appApi);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
