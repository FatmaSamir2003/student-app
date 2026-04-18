import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-details-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-details-page.html',
  styleUrl: './student-details-page.css',
})
export class StudentDetailsPage implements OnInit {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getStudentById(id);
  }
}
