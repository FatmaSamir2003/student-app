import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { StudentTableComponent } from '../../components/student-table/student-table';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentTableComponent],
  templateUrl: './students-page.html',
})
export class StudentsPage {
  searchTerm: string = '';
  selectedDept: string = '';

  constructor(private studentService: StudentService) {}

  get filteredStudents() {
    let list = this.studentService.getStudentsValue();
    if (this.searchTerm) {
      list = list.filter((s) =>
        (s.firstName + ' ' + s.lastName).toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    }
    if (this.selectedDept) {
      list = list.filter((s) => s.department === this.selectedDept);
    }
    return list;
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }
}
