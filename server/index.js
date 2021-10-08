const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: '../.env' });
const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: `http://localhost:${port}`,
};

const db = require('./models/index');
const User = db.user;

app.use(cors(corsOptions));

app.get('/test', (req, res) => {
  res.json({ message: 'Test complete. Working.' });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
