import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'
import Sala from 'App/Models/Sala'
import Professor from 'App/Models/Professor'

export default class AlunosController {
  // ...outros métodos...

  public async listSalas({ params, response }: HttpContextContract) {
    const alunoId = params.alunoId

    // Buscar aluno
    const aluno = await Aluno.find(alunoId)
    if (!aluno) {
      return response.status(404).json({ error: 'Aluno não encontrado' })
    }

    // Buscar salas em que o aluno está alocado
    const salas = await Sala.query().whereHas('alunos', (builder) => {
      builder.where('aluno_id', alunoId)
    }).preload('professor')

    // Montar resposta
    const resultado = {
      nome: aluno.nome,
      salas: salas.map((sala) => ({
        nomeProfessor: sala.professor?.nome,
        numeroSala: sala.numero,
      })),
    }

    return response.json(resultado)
  }
}
