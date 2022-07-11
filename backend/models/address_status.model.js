import { Model } from 'objection'
import connection from '../config/db.config'
import tablesConfig from '../config/tables.config'

//db initialization
Model.knex(connection)

//Address Model

class AddressStatus extends Model {
	static get tableName() {
		return tablesConfig.address
	}
	static get idColumn() {
		return 'status_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['status_Id', 'address_status'],

			properties: {
				status_id: { type: 'integer' },
				address_status: {
					type: 'string',
					minLength: 1,
					maxLength: 40,
				},
			},
		}
	}
}

export default AddressStatus
