import knex from 'knex'
import knexConfig from '../knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const connectionConfig = knexConfig[environment]

const connection = knex(connectionConfig)

export default connection
