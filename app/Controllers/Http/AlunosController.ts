import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'
import Sala from 'App/Models/Sala'

export default class AlunosController {
  // RF01
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['nome', 'email', 'matricula', 'dataNascimento'])
    const aluno = await Aluno.create(data)
    return response.status(201).json(aluno)
  }

  // RF02
  public async update({ params, request, response }: HttpContextContract) {
    const aluno = await Aluno.find(params.id)
    if (!aluno) return response.status(404).json({ error: 'Aluno não encontrado' })
    aluno.merge(request.only(['nome', 'email', 'matricula', 'dataNascimento']))
    await aluno.save()
    return aluno
  }

  // RF03
  public async destroy({ params, response }: HttpContextContract) {
    const aluno = await Aluno.find(params.id)
    if (!aluno) return response.status(404).json({ error: 'Aluno não encontrado' })
    await aluno.delete()
    return response.status(204)
  }

  // RF04
  public async show({ params, response }: HttpContextContract) {
    const aluno = await Aluno.find(params.id)
    if (!aluno) return response.status(404).json({ error: 'Aluno não encontrado' })
    return aluno
  }

  // RF16 + RN06
  public async listSalas({ params, response }: HttpContextContract) {
    const aluno = await Aluno.find(params.alunoId)
    if (!aluno) return response.status(404).json({ error: 'Aluno não encontrado' })
    await aluno.load('salas', (salaQuery) => {
      salaQuery.preload('professor')
    })
    return {
      nome: aluno.nome,
      salas: aluno.salas.map((sala) => ({
        nomeProfessor: sala.professor?.nome,
        numeroSala: sala.numero,
      })),
    }
  }
}
