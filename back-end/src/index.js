require('dotenv').config({
  path:'../.env'
});

const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());
app.use(cors());

app.use(rotas);

app.listen(process.env.PORT || 3000);