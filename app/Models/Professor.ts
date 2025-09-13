import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Sala from 'App/Models/Sala'

export default class Professor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string // RN02

  @column()
  public email: string // RN02

  @column()
  public matricula: string // RN02

  @column.date()
  public dataNascimento: Date // RN02

  @hasMany(() => Sala)
  public salas: HasMany<typeof Sala>
}
