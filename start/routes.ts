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

// Aluno
Route.post('/alunos', 'AlunosController.store') // RF01
Route.put('/alunos/:id', 'AlunosController.update') // RF02
Route.delete('/alunos/:id', 'AlunosController.destroy') // RF03
Route.get('/alunos/:id', 'AlunosController.show') // RF04
Route.get('/alunos/:alunoId/salas', 'AlunosController.listSalas') // RF16

// Professor
Route.post('/professores', 'ProfessoresController.store') // RF05
Route.put('/professores/:id', 'ProfessoresController.update') // RF06
Route.delete('/professores/:id', 'ProfessoresController.destroy') // RF07
Route.get('/professores/:id', 'ProfessoresController.show') // RF08

// Sala
Route.post('/salas', 'SalasController.store') // RF09
Route.put('/salas/:id', 'SalasController.update') // RF10
Route.delete('/salas/:id', 'SalasController.destroy') // RF11
Route.get('/salas/:id', 'SalasController.show') // RF12

// Alocação de alunos em sala
Route.post('/salas/:salaId/alunos/:alunoId', 'SalasController.addAluno') // RF13
Route.delete('/salas/:salaId/alunos/:alunoId', 'SalasController.removeAluno') // RF14
Route.get('/salas/:salaId/alunos', 'SalasController.listAlunos') // RF15
