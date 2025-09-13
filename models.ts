// Modelo de Aluno
export interface Aluno {
  id: string;
  nome: string;
  email: string;
  matricula: string;
  dataNascimento: string; // formato ISO
}

// Modelo de Professor
export interface Professor {
  id: string;
  nome: string;
  email: string;
  matricula: string;
  dataNascimento: string; // formato ISO
}

// Modelo de Sala
export interface Sala {
  id: string;
  numero: string;
  capacidade: number;
  disponibilidade: boolean;
  professorId: string; // Sala criada por este professor
  alunos: string[]; // Array de IDs de alunos
}