const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: `http://localhost:${port}`,
};
