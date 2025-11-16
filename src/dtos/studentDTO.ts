import { Student } from "../types/student";

export class StudentDTO {
  id: number;
  name: string;

  constructor(student: Student) {
    this.id = student.id;
    this.name = student.name;
  }
}
