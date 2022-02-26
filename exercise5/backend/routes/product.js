const express = require ('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const products = [
    {
        "id": uuidv4(),
        "img": "https://dummyjson.com/image/i/products/2/1.jpg",
        "name": "phone",
        "manufacturer": "Company A",
        "category": "phones",
        "description": "Best phone ever",
        "price": 12000
    },
    {
        "id": uuidv4(),
        "img": "https://dummyjson.com/image/i/products/3/1.jpg",
        "name": "phone2",
        "manufacturer": "Company AB",
        "category": "phones",
        "description": "2. best phone ever",
        "price": 10000
    },
    {
        "id": uuidv4(),
        "img": "https://dummyjson.com/image/i/products/10/1.jpg",
        "name": "computer",
        "manufacturer": "Phonefirm",
        "category": "computers",
        "description": "Best computer ever",
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
        id: uuidv4(),
        img: req.body.img,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    });
    res.sendStatus(201);
});

router.delete('/:productId', (req, res) => {
    let deletedItemIndex = products.findIndex(p => p.id === req.params.productId);
    products.splice(deletedItemIndex, 1);
    res.sendStatus(202);
})

router.put('/:productId', (req, res) => {
    let foundProduct = products.find(p => p.id == req.params.productId);
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
    let foundProducts = [];
    
    foundProducts = products.filter(el => el.name.toLowerCase().indexOf(req.params.searchParam.toLowerCase()) !== -1 || 
        el.manufacturer.toLowerCase().indexOf(req.params.searchParam.toLowerCase()) !== -1 ||
        el.category.toLowerCase().indexOf(req.params.searchParam.toLowerCase()) !== -1
        );

    res.json(foundProducts);
})

module.exports = router;