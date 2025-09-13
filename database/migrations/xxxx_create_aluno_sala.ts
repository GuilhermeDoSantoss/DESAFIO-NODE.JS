import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'aluno_sala'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('aluno_id').unsigned().references('id').inTable('alunos').onDelete('CASCADE')
      table.integer('sala_id').unsigned().references('id').inTable('salas').onDelete('CASCADE')
      table.unique(['aluno_id', 'sala_id'])
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}