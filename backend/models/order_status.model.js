import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Customer_Address model.
class OrderStatus extends Model {
	static get tableName() {
		return tablesConfig.order_status
	}

	static get idColumn() {
		return 'status_Id'
	}
	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['status_Id', 'status_value'],

			properties: {
				status_Id: { type: 'integer' },
				status_value: { type: 'string', minLength: 1, maxLength: 90 },
			},
		}
	}
}

export default OrderStatus
