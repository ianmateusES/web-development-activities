const { response } = require('express');
const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);

// Start aplication: yarn dev
app.listen(9999, () => {
  console.log('Server started on port 9999');
});
