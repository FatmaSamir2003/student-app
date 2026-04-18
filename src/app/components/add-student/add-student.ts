import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudentPage implements OnInit {
  student: any = {
    firstName: '',
    lastName: '',
    age: null,
    department: '',
    email: '',
    GPA: null,
  };

  isEditMode: boolean = false;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      const existingStudent = this.studentService.getStudentById(Number(id));
      if (existingStudent) {
        this.student = { ...existingStudent };
      }
    }
  }

  save() {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student);
      console.log('Student Updated!');
    } else {
      this.studentService.addStudent(this.student);
      console.log('New Student Added!');
    }

    this.router.navigate(['/students']);
  }
}
