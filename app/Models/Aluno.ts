import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Sala from 'App/Models/Sala'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string // RN01

  @column()
  public email: string // RN01

  @column()
  public matricula: string // RN01

  @column.date()
  public dataNascimento: Date // RN01

  @manyToMany(() => Sala, {
    pivotTable: 'aluno_sala',
    localKey: 'id',
    pivotForeignKey: 'aluno_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'sala_id',
  })
  public salas: ManyToMany<typeof Sala>
}
