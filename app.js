const express = require('express');
const app = express();
/*****************App imports****************************/
//routes
app.get('/', (req, res) => res.send('Hello World!'));

//server
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
