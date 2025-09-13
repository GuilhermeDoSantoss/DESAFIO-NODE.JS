import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'
import Aluno from 'App/Models/Aluno'
import Professor from 'App/Models/Professor'

export default class SalasController {
  // RF09
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['numero', 'capacidade', 'disponibilidade', 'professorId'])
    const professor = await Professor.find(data.professorId)
    if (!professor) return response.status(400).json({ error: 'Professor não encontrado' })
    const sala = await Sala.create(data)
    return response.status(201).json(sala)
  }

  // RF10
  public async update({ params, request, response }: HttpContextContract) {
    const sala = await Sala.find(params.id)
    if (!sala) return response.status(404).json({ error: 'Sala não encontrada' })
    sala.merge(request.only(['numero', 'capacidade', 'disponibilidade']))
    await sala.save()
    return sala
  }

  // RF11
  public async destroy({ params, response }: HttpContextContract) {
    const sala = await Sala.find(params.id)
    if (!sala) return response.status(404).json({ error: 'Sala não encontrada' })
    await sala.delete()
    return response.status(204)
  }

  // RF12
  public async show({ params, response }: HttpContextContract) {
    const sala = await Sala.find(params.id)
    if (!sala) return response.status(404).json({ error: 'Sala não encontrada' })
    return sala
  }

  // RF13 (alocar aluno) + RN03, RN04, RN05
  public async addAluno({ params, request, response }: HttpContextContract) {
    const sala = await Sala.find(params.salaId)
    if (!sala) return response.status(404).json({ error: 'Sala não encontrada' })
    const aluno = await Aluno.find(params.alunoId)
    if (!aluno) return response.status(404).json({ error: 'Aluno não encontrado' })
    const { professorId } = request.only(['professorId'])
    if (sala.professorId !== Number(professorId)) {
      return response.status(403).json({ error: 'Somente o professor criador pode alocar alunos' }) // RN05
    }
    if (!sala.disponibilidade) {
      return response.status(400).json({ error: 'Sala indisponível para alocação' })
    }
    const alunosCount = await sala.related('alunos').query().count('* as total')
    if (Number(alunosCount[0].$extras.total) >= sala.capacidade) {
      return response.status(400).json({ error: 'Capacidade da sala excedida' }) // RN04
    }
    const jaAlocado = await sala.related('alunos').query().where('aluno_id', aluno.id).first()
    if (jaAlocado) {
      return response.status(400).json({ error: 'Aluno já alocado nesta sala' }) // RN03
    }
    await sala.related('alunos').attach([aluno.id])
    return response.status(201).json({ message: 'Aluno alocado com sucesso' })
  }

  // RF14
  public async removeAluno({ params, response }: HttpContextContract) {
    const sala = await Sala.find(params.salaId)
    if (!sala) return response.status(404).json({ error: 'Sala não encontrada' })
    const aluno = await Aluno.find(params.alunoId)
    if (!aluno) return response.status(404).json({ error: 'Aluno não encontrado' })
    await sala.related('alunos').detach([aluno.id])
    return response.status(200).json({ message: 'Aluno removido da sala' })
  }

  // RF15
  public async listAlunos({ params, response }: HttpContextContract) {
    const sala = await Sala.find(params.salaId)
    if (!sala) return response.status(404).json({ error: 'Sala não encontrada' })
    await sala.load('alunos')
    return sala.alunos
  }
}