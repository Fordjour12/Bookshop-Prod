import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Order_History model.
class OrderHistory extends Model {
	static get tableName() {
		return tablesConfig.order_history
	}

	static get idColumn() {
		return 'history_Id', 'order_Id', 'status_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['history_Id', 'order_Id', 'status_Id', 'status_date'],

			properties: {
				customer_Id: { type: 'uuid' },
				order_Id: { type: 'uuid' },
				status_Id: { type: 'integer' },
				status_date: { type: 'date' },
			},
		}
	}
}

export default OrderHistory
