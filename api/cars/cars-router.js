// DO YOUR MAGIC
const express = require('express')

const Cars = require('./cars-model');

const router = express.Router();

router.get('/', (req, res, next)=>{
    //res.json('getting all cars')
     Cars.getAll().then(cars=>{
        res.json(cars)

    })
    .catch(err =>{
        res.status(500).json({ message: 'Failed to getALL'})
    });
    
})

router.get('/:id', (req, res, next)=>{
    res.json(`getting ID ${req.params.id}`)
})



router.post('/', (req, res, next)=>{
    res.json('updated POST')
})

module.exports = router