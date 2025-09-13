/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Rotas para Aluno
Route.post('/alunos', 'AlunosController.store')
Route.get('/alunos', 'AlunosController.index')
Route.get('/alunos/:id', 'AlunosController.show')
Route.put('/alunos/:id', 'AlunosController.update')
Route.delete('/alunos/:id', 'AlunosController.destroy')
Route.get('/alunos/:alunoId/salas', 'AlunosController.listSalas')

// Rotas para Professor
Route.post('/professores', 'ProfessoresController.store')
Route.get('/professores', 'ProfessoresController.index')
Route.get('/professores/:id', 'ProfessoresController.show')
Route.put('/professores/:id', 'ProfessoresController.update')
Route.delete('/professores/:id', 'ProfessoresController.destroy')

// Rotas para Sala
Route.post('/salas', 'SalasController.store')
Route.get('/salas', 'SalasController.index')
Route.get('/salas/:id', 'SalasController.show')
Route.put('/salas/:id', 'SalasController.update')
Route.delete('/salas/:id', 'SalasController.destroy')

// Alocar e remover aluno de sala
Route.post('/salas/:salaId/alunos/:alunoId', 'SalasController.addAluno')
Route.delete('/salas/:salaId/alunos/:alunoId', 'SalasController.removeAluno')

// Consultar todos os alunos de uma sala
Route.get('/salas/:salaId/alunos', 'SalasController.listAlunos')
