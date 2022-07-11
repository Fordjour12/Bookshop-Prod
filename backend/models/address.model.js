import { Model } from 'objection'
import connection from '../config/db.config'
import tablesConfig from '../config/tables.config'

//db initialization
Model.knex(connection)

//Address Model

class Address extends Model {
	static get tableName() {
		return tablesConfig.address
	}
	static get idColumn() {
		return 'address_Id', 'region_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: [
				'address_id',
				'street_name',
				'city',
				'GPS_address',
				'region_Id',
			],

			properties: {
				address_id: { type: 'integer' },
				street_name: { type: 'string', minLength: 1, maxLength: 250 },
				city: { type: 'string', minLength: 1, maxLength: 255 },
				GPS_address: { type: 'string', minLength: 1, maxLength: 20 },
				region_Id: { type: 'integer' },
			},
		}
	}
}

export default Address
