import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// db initialization
Model.knex(connection)

// Author model

class Author extends Model {
	static get tableName() {
		return tablesConfig.author
	}

	static get idColumn() {
		return 'author_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['author_Id', 'author_name'],

			properties: {
				author_Id: { type: 'uuid' },
				author_name: { type: 'string', minLength: 1, maxLength: 255 },
			},
		}
	}
}

export default Author
