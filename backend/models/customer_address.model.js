import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Customer_Address model.
class CustomerAddress extends Model {
	static get tableName() {
		return tablesConfig.customer_address
	}

	static get idColumn() {
		return 'customer_Id', 'status_Id', 'address_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['customer_Id', 'status_Id', 'address_Id'],

			properties: {
				customer_Id: { type: 'uuid' },
				status_Id: { type: 'integer' },
				address_Id: { type: 'integer' },
			},
		}
	}
}

export default CustomerAddress
