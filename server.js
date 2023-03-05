const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
/******************server********************************/
dotenv.config({ path: './config.env' });
const connectionString = process.env.CON_STRING.replace(
  '<password>',
  process.env.PASSWORD
);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('Db connection Succecss');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
