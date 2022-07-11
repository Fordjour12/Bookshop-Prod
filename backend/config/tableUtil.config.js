export function createTableName(knex, tableName) {
	return knex.schema.createTable(tableName, (table) => {
		table
			.uuid(`${tableName}_Id`)
			.defaultTo(knex.raw('gen_random_uuid()'))
			.notNullable()
			.primary()
		table.string(`${tableName}_name`).notNullable()
	})
}
export function createTableNameInt(knex, tableName) {
	return knex.schema.createTable(tableName, (table) => {
		table.integer(`${tableName}_Id`).notNullable().primary()
		table.string(`${tableName}_name`).notNullable()
	})
}

export function references(
	table,
	tableName,
	notNullable = true,
	columnName = ''
) {
	const definition = table
		.integer(`${columnName || tableName}_Id`)
		.unsigned()
		.references(`${columnName || tableName}_Id`)
		.inTable(tableName)
		.onDelete('cascade')

	if (notNullable) {
		definition.notNullable()
	}
	return definition
}
export function referencesUUID(
	table,
	tableName,
	notNullable = true,
	columnName = ''
) {
	const definition = table
		.uuid(`${columnName || tableName}_Id`)
		.references(`${columnName || tableName}_Id`)
		.inTable(tableName)
		.onDelete('cascade')

	if (notNullable) {
		definition.notNullable()
	}
	return definition
}

export default {
	createTableName,
	createTableNameInt,
	references,
	referencesUUID,
}
