const express = require ('express');
const { post } = require('./user');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const invoices = [
    {
        id: uuidv4(),
        userId: "23",
        products: [],
        sum: 0
    },
];

router.get('/', (req,res) => {
    res.json(invoices);
})

router.post('/', (req, res) => {
    invoices.push(
        {
            id: uuidv4(),
            userId: req.body.userId,
            products: req.body.products,
            sum: req.body.sum
        },
    )
    res.sendStatus(201);
})

router.get('/userinvoices/:userId', (req, res) => {
    let userInvoices = [];
    userInvoices = invoices.filter(i => i.userId.indexOf(req.params.userId) !== -1);
    res.json(userInvoices);
})

router.get('/:invoiceId', (req,res) => {
    let foundIndex = invoices.findIndex(i => i.id == req.params.invoiceId);
    res.json(invoices[foundIndex]);
})

router.delete('/:invoiceId', (req, res) => {
    let foundIndex = invoices.findIndex(i => i.id === req.params.invoiceId);
    if(foundIndex === -1){
        res.sendStatus(404);
    }else{
        invoices.splice(foundIndex, 1);
        res.sendStatus(202);
    }
})

module.exports = router;