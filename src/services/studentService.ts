import * as studentRepository from "../repositories/studentRepository";
import { Student } from "../types/student";
import { StudentDTO } from "../dtos/studentDTO";

export async function getAllStudents(): Promise<StudentDTO[]> {
  const students = await studentRepository.findAll();
  return students.map((s) => new StudentDTO(s));
}

export async function getStudentById(id: number): Promise<StudentDTO | null> {
  const student = await studentRepository.findById(id);
  return student ? new StudentDTO(student) : null;
}

export async function addStudent(name: string): Promise<StudentDTO> {
  const newStudent = await studentRepository.create(name);
  return new StudentDTO(newStudent);
}
