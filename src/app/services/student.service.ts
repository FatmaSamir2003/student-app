import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private studentsList: Student[] = [
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali@email.com',
      phone: '01000',
      address: 'Cairo',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.5,
      enrollmentDate: '2023-01-01',
      isActive: true,
    },
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.studentsList);
  students$ = this.studentsSubject.asObservable();

  getStudentsValue() {
    return this.studentsSubject.value;
  }

  addStudent(student: any) {
    const maxId =
      this.studentsList.length > 0 ? Math.max(...this.studentsList.map((s) => s.id)) : 0;
    this.studentsList.push({ ...student, id: maxId + 1, isActive: true });
    this.studentsSubject.next([...this.studentsList]);
  }

  updateStudent(updatedStudent: Student) {
    const index = this.studentsList.findIndex((s) => s.id === updatedStudent.id);
    if (index !== -1) {
      this.studentsList[index] = updatedStudent;
      this.studentsSubject.next([...this.studentsList]);
    }
  }

  deleteStudent(id: number) {
    this.studentsList = this.studentsList.filter((s) => s.id !== id);
    this.studentsSubject.next([...this.studentsList]);
  }

  getStudentById(id: number) {
    return this.studentsList.find((s) => s.id === id);
  }
}
