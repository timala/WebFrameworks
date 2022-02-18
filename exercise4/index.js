const express = require('express');
const app = express();
const products = require ('./routes/product');
const user = require ('./routes/user');
const invoice = require ('./routes/invoice');

app.use('/products', products);
app.use('/user', user);
app.use('/invoice', invoice);


app.listen(3000, () => {
    console.log("App listening on port 3000");
})