import { Model } from 'objection'
import connection from '../config/db.config'
import tablesConfig from '../config/tables.config'

// db initialization
Model.knex(connection)

// Publisher Model
class ShippingMethod extends Model {
	static get tableName() {
		return tablesConfig.shipping_method
	}

	static get idColumn() {
		return 'method_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['method_Id', 'method_name', 'cost'],

			properties: {
				method_Id: { type: 'integer' },
				method_name: {
					type: 'string',
					minLength: 1,
					maxLength: 255,
				},
				cost: { type: 'numeric' },
			},
		}
	}
}

export default ShippingMethod
