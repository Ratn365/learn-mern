const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
/******************server********************************/
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
