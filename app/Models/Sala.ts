import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Professor from 'App/Models/Professor'
import Aluno from 'App/Models/Aluno'

export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numero: string // RN03

  @column()
  public capacidade: number // RN03

  @column()
  public disponibilidade: boolean // RN03

  @column()
  public professorId: number

  @belongsTo(() => Professor)
  public professor: BelongsTo<typeof Professor>

  @manyToMany(() => Aluno, {
    pivotTable: 'aluno_sala',
    localKey: 'id',
    pivotForeignKey: 'sala_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'aluno_id',
  })
  public alunos: ManyToMany<typeof Aluno>
}
