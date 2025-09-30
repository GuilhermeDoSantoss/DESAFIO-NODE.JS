import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'salas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('numero').notNullable()
      table.integer('capacidade').notNullable()
      table.boolean('disponibilidade').notNullable()
      table.integer('professor_id').unsigned().references('id').inTable('professores').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}