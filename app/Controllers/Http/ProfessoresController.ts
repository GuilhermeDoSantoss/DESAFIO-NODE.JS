import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor'

export default class ProfessoresController {
  // RF05
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['nome', 'email', 'matricula', 'dataNascimento'])
    const professor = await Professor.create(data)
    return response.status(201).json(professor)
  }

  // RF06
  public async update({ params, request, response }: HttpContextContract) {
    const professor = await Professor.find(params.id)
    if (!professor) return response.status(404).json({ error: 'Professor não encontrado' })
    professor.merge(request.only(['nome', 'email', 'matricula', 'dataNascimento']))
    await professor.save()
    return professor
  }

  // RF07
  public async destroy({ params, response }: HttpContextContract) {
    const professor = await Professor.find(params.id)
    if (!professor) return response.status(404).json({ error: 'Professor não encontrado' })
    await professor.delete()
    return response.status(204)
  }

  // RF08
  public async show({ params, response }: HttpContextContract) {
    const professor = await Professor.find(params.id)
    if (!professor) return response.status(404).json({ error: 'Professor não encontrado' })
    return professor
  }
}