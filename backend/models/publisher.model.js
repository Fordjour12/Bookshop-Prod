import { Model } from 'objection'
import connection from '../config/db.config'
import tablesConfig from '../config/tables.config'
import BookLanguage from './books_language.model'

// db initialization
Model.knex(connection)

// Publisher Model
class Publisher extends Model {
	static get tableName() {
		return tablesConfig.publisher
	}

	static get idColumn() {
		return 'publisher_Id'
	}

	static relationMappings = {
		ps: {
			relation: Model.ManyToManyRelation,
			modelClass: BookLanguage,
			join: {
				from: 'publisher.publisher_Id',
				through: {
					from: 'book.language_Id',
					to: 'book.publisher_Id',
				},
				to: 'book_language.language_Id',
			},
		},
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['publisher_Id', 'publisher_name'],

			properties: {
				publisher_Id: { type: 'integer' },
				publisher_name: {
					type: 'string',
					minLength: 1,
					maxLength: 255,
				},
			},
		}
	}
}

export default Publisher
