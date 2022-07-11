import { Model } from 'objection'
import tablesConfig from '../config/tables.config,js'
import connection from '../config/db.config'
import Author from './author.model'

// initializing the db config
Model.knex(connection)

class Book extends Model {
	static get tableName() {
		return tablesConfig.book
	}

	static get idColumn() {
		return 'book_Id'
	}

	static relationMappings = {
		authors: {
			relation: Model.ManyToManyRelation,
			modelClass: Author,
			join: {
				from: 'book.book_Id',
				through: {
					from: 'book_author.book_Id',
					to: 'book_author.author_Id',
				},
				to: 'author.author_Id',
			},
		},
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: [
				'books_Id',
				'title',
				'isbn13',
				'language_Id',
				'num_pages',
				'publication_date',
				'publisher_Id',
			],

			properties: {
				book_Id: { type: 'uuid' },
				title: { type: 'string', minLength: 1, maxLength: 200 },
				isbn13: { type: 'string' },
				language_Id: { type: 'integer' },
				num_pages: { type: 'integer' },
				publication_date: { type: 'date' },
				publisher_Id: { type: 'uuid' },
			},
		}
	}
}

export default Book
