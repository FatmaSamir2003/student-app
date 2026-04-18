import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-table.html',
})
export class StudentTableComponent {
  @Input() studentsData: Student[] | null = [];
  @Output() deleteEvent = new EventEmitter<number>();
  onDelete(id: number) {
    this.deleteEvent.emit(id);
  }
}
