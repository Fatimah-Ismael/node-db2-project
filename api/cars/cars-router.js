// DO YOUR MAGIC
const express = require('express')

const Cars = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique }= require('./cars-middleware')
const router = express.Router();

router.get('/', (req, res, next)=>{
    //res.json('getting all cars')
     Cars.getAll()
     .then(cars=>{
        res.json(cars)

    })
    /*.catch(err =>{
        res.status(500).json({ message: 'Failed to getALL'})
    }); */
    .catch(next)
})

router.get('/:id', checkCarId, (req, res, next)=>{
    Cars.getById(req.params.id)
    .then(car=>{
    res.json(req.car)
    })
    /*.catch(err =>{
        res.status(500).json({ message: `Failed to find ID ${req.params.id}`})
    }); */
    .catch(next)
})



router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next)=>{
    Cars.create(req.body)
    .then(car=>{
        res.json(car)
    }).catch(next)
})

module.exports = router