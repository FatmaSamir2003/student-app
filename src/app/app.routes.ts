import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { StudentsPage } from './pages/students-page/students-page';
import { AddStudentPage } from './pages/add-student-page/add-student-page';
import { StudentDetailsPage } from './pages/student-details-page/student-details-page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'students', component: StudentsPage },
  { path: 'add-student', component: AddStudentPage },
  { path: 'edit-student/:id', component: AddStudentPage },
  { path: 'student/:id', component: StudentDetailsPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
