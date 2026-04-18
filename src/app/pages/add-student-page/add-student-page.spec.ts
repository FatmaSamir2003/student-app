import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentPage } from './add-student-page';

describe('AddStudentPage', () => {
  let component: AddStudentPage;
  let fixture: ComponentFixture<AddStudentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
