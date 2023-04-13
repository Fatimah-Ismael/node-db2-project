// STRETCH
const cars = [
{
    vin: '1234567891234',
    make: 'toyota',
    model: 'prius',
    mileage: 500,
    title: 'clean',
    transmission: 'automatic'
},

{
    vin: '1234567891111',
    make: 'toyota',
    model: 'yaris',
    mileage: 100500,
    title: 'salvage',
    transmission: 'manual'
},

{
    vin: '1114567891234',
    make: 'toyota',
    model: 'corolla',
    mileage: 11500,
    title: 'clean',
    transmission: 'automatic'
},

{
    vin: '111412391234',
    make: 'tesla',
    model: 'model3',
    mileage: 21500,
    title: 'clean',
    transmission: 'automatic'
}

]

exports.seed =  async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}