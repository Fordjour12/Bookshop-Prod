import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// OrderLine model.
class OrderLine extends Model {
	static get tableName() {
		return tablesConfig.order_line
	}

	static get idColumn() {
		return 'line_Id', 'order_Id', 'book_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['line_Id', 'order_Id', 'book_Id', 'price'],

			properties: {
				line_Id: { type: 'uuid' },
				order_Id: { type: 'uuid' },
				book_Id: { type: 'uuid' },
				price: { type: 'numeric' },
			},
		}
	}
}

export default OrderLine
