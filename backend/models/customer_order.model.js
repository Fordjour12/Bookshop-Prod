import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Customer_Order model.
class CustomerOrder extends Model {
	static get tableName() {
		return tablesConfig.customer_order
	}

	static get idColumn() {
		return 'order_Id', 'customer_Id', 'method_Id', 'address_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: [
				'order_Id',
				'order_date',
				'customer_Id',
				'method_Id',
				'address_Id',
			],

			properties: {
				order_Id: { type: 'uuid' },
				order_date: { type: 'date' },
				customer_Id: { type: 'uuid' },
				method_Id: { type: 'integer' },
				address_Id: { type: 'integer' },
			},
		}
	}
}

export default CustomerOrder
