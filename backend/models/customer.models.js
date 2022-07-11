import { Model } from 'objection'
import tablesConfig from '../config/tables.config.js'
import connection from '../config/db.config.js'

// initializing the db config
Model.knex(connection)

// Customer model.
class Customer extends Model {
	static get tableName() {
		return tablesConfig.customer
	}

	// static relationMappings = {}

	static get idColumn() {
		return 'customer_Id'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['username', 'email', 'password'],

			properties: {
				username: { type: 'string', minLength: 1, maxLength: 255 },
				email: { type: 'string', minLength: 1, maxLength: 255 },
				password: { type: 'string', minLength: 6, maxLength: 255 },
			},
		}
	}
}

export default Customer
