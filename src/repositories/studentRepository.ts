import { StudentModel } from "../models/studentModel";
import { Student } from "../types/student";

export async function findAll(): Promise<Student[]> {
  const students = await StudentModel.findAll();
  return students.map((s) => s.toJSON() as Student);
}

export async function findById(id: number): Promise<Student | null> {
  const student = await StudentModel.findByPk(id);
  return student ? (student.toJSON() as Student) : null;
}

export async function create(name: string): Promise<Student> {
  const newStudent = await StudentModel.create({ name });
  return newStudent.toJSON() as Student;
}
