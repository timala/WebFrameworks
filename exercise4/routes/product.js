const express = require ('express');
const router = express.Router();

const products = [
    {
        "id": 1,
        "name": "phone",
        "manufacturer": "Company A",
        "category": "phones",
        "description": "Best phone ever",
        "price": 12000
    },
    {
        "id": 2,
        "name": "phone2",
        "manufacturer": "Company AB",
        "category": "phones",
        "description": "2. best phone ever",
        "price": 10000
    },
    {
        "id": 3,
        "name": "phone3",
        "manufacturer": "Company ABC",
        "category": "phones",
        "description": "3. best phone ever",
        "price": 8000
    },
];

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:productId', (req,res) => {
    let foundIndex = products.findIndex(p => p.id == req.params.productId);
    res.json(products[foundIndex]);
});

router.post('/', (req, res) => {
    products.push({
        id: 3,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    });
    res.sendStatus(201);
});

router.put('/:productId', (req, res) => {
    let foundProduct = products.find(p => p.id === req.params.productId);
    if(foundProduct){
        foundProduct.name = req.body.name;
        foundProduct.manufacturer = req.body.manufacturer;
        foundProduct.category = req.body.category;
        foundProduct.description = req.body.description;
        foundProduct.price = req.body.price;
        res.sendStatus(202);
    }
    else{
        res.sendStatus(404);
    }
});

router.get('/search/:searchParam', (req, res) => {
    let newProducts = [];
    
    products.map(p => {
        let foundIndex = products.findIndex(p => p.name === req.params.searchParam)
        newProducts.push(products[foundIndex]);
    })
    res.json(newProducts);
})

module.exports = router;