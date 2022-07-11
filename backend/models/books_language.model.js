import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Books_Language model.
class BooksLanguage extends Model {
	static get tableName() {
		return tablesConfig.books_language
	}

	static get idColumn() {
		return 'language_Id'
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['language_Id', 'language_code', 'language_name'],

			properties: {
				language_Id: { type: 'integer' },
				language_code: { type: 'string', minLength: 1, maxLength: 8 },
				language_name: { type: 'string', minLength: 1, maxLength: 300 },
			},
		}
	}
}

export default BooksLanguage
