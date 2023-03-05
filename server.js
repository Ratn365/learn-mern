const app = require('./app');
const dotenv = require('dotenv');
/******************server********************************/
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
