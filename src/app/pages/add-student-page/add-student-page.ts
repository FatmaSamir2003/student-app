import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-student-page.html',
})
export class AddStudentPage implements OnInit {
  student: any = { firstName: '', lastName: '', age: null, department: '', email: '', GPA: null };
  isEditMode = false;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      const data = this.studentService.getStudentById(Number(id));
      if (data) this.student = { ...data };
    }
  }

  save() {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student);
    } else {
      this.studentService.addStudent(this.student);
    }
    this.router.navigate(['/students']);
  }
}
