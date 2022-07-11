import 'dotenv/config'
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
	development: {
		debug: true,
		client: 'pg',
		connection: process.env.ELEPHANTSQL_CONNECTION,
		// connection: {
		// 	// host: process.env.Postgres_HOST,
		// 	// port: process.env.Postgres_PORT,
		// 	database: process.env.Postgres_DB,
		// 	user: process.env.Postgres_USER,
		// 	password: process.env.Postgres_PASSWORD,
		// },
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds',
		},
	},
	production: {
		debug: true,
		client: 'pg',
		connection: process.env.ELEPHANTSQL_CONNECTION,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds',
		},
	},
}
