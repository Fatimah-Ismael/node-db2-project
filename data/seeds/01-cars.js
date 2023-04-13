// STRETCH
const cars = [
{
    vin: 'JH4DC4450RS002529',
    make: 'toyota',
    model: 'prius',
    mileage: 500,
    title: 'clean',
    transmission: 'automatic'
},

{
    vin: 'WP0AA0941HN450519',
    make: 'toyota',
    model: 'yaris',
    mileage: 100500,
    title: 'salvage',
    transmission: 'manual'
},

{
    vin: '4JGBF71E18A429191',
    make: 'toyota',
    model: 'corolla',
    mileage: 11500,
    title: 'clean',
    transmission: 'automatic'
},

{
    vin: 'JH4DA9370MS016526',
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