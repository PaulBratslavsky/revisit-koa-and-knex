/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sample_table', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age');
    table.timestamps(true, true);  // Creates created_at and updated_at columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sample_table');
};
