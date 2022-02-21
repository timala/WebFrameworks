const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const products = require ('./routes/product');
const user = require ('./routes/user');
const invoice = require ('./routes/invoice');

app.use(cors());
app.use(bodyParser.json());
app.use('/product', products);
app.use('/user', user);
app.use('/invoice', invoice);


app.listen(3001, () => {
    console.log("App listening on port 3001");
})