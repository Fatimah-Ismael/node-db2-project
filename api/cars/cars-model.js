const knex = require('knex')
const db = knex({
  client: 'sqlite3', 
  connection: {
  
  }
})

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first()
}

const create = () => {
  // DO YOUR MAGIC
}
