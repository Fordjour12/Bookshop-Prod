import { Model } from 'objection'
import connection from '../config/db.config'
import tablesConfig from '../config/tables.config'

// db initialization
Model.knex(connection)

// Publisher Model
class Region extends Model {
	static get tableName() {
		return tablesConfig.region
	}

	static get idColumn() {
		return 'region_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['region_Id', 'region_name'],

			properties: {
				region_Id: { type: 'integer' },
				region_name: {
					type: 'string',
					minLength: 1,
					maxLength: 255,
				},
			},
		}
	}
}

export default Region
