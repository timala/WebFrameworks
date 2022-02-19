const express = require ('express');
const { post } = require('./user');
const router = express.Router();

const invoice = [
    {
        id: 1,
        userId: 1,
        products: [],
        sum: 0
    },
];

router.post('/', (req, res) => {
    invoice.push(
        {
            id: 34,
            userId: req.body.userId,
            products: [req.body.products],
            sum: req.body.sum
        },
    )
})

router.get('/:userId', (req, res) => {
    let userInvoices = [];
    invoice.map(i => {
        let foundIndex = invoice.findIndex(i.userId === req.params.userId)
        userInvoices.push(invoice[foundIndex])
})
    res.json(userInvoices);
})

router.get('/:invoiceId', (req,res) => {
    let foundIndex = invoice.map(i => i.id === req.params.invoiceId)
    res.send(invoice[foundIndex]);
})

router.delete('/:invoiceId', (req, res) => {
    let foundIndex = invoice.findIndex(i => i.id === req.params.invoiceId);
    if(foundIndex === -1){
        res.sendStatus(404);
    }else{
        invoice.splice(foundIndex, 1);
        res.sendStatus(202);
    }
})

module.exports = router;