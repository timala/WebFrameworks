const express = require ('express');
const router = express.Router();

const users = 
[{
   id: 1,
   firstName: "Maija",
   lastName: "Meikäläinen",
   address: "Jokutie 65, 87212 Kaupunki",
   phoneNumber: "0565478963" 
}];

router.post('/', (req, res) => {
    users.push({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    });
    res.sendStatus(201); 
});

router.get('/', (req, res) => {
    res.json(users);
})

module.exports = router;