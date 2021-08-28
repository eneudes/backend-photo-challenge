import { Knex } from 'knex';

export async function up(knex: Knex) {
return knex.schema.createTable('photos', table => {
  table.increments('id').primary();
  table.string('image_url').notNullable();
});
}
export async function down(knex: Knex){
  return knex.schema.dropTable('photos');
}