import tablesConfig from '../../config/tables.config.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema.createTable(tablesConfig.customer, (table) => {
		table
			.uuid('customer_Id')
			.defaultTo(knex.raw('gen_random_uuid()'))
			.notNullable()
			.unique()
			.primary()
		table.string('username', 255).notNullable()
		table.string('email', 255).notNullable().unique()
		table.string('password', 255).notNullable()
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	// await Promise.all(
	// 	[tablesConfig.customer].map((tableConfig) =>
	// 		knex.schema.dropTableIfExistsIfExists(tableConfig)
	// 	)
	// )
	await knex.schema.dropTableIfExists(tablesConfig.customer)
}
