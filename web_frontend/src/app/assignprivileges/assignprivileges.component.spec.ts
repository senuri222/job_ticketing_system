import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignprivilegesComponent } from './assignprivileges.component';

describe('AssignprivilegesComponent', () => {
  let component: AssignprivilegesComponent;
  let fixture: ComponentFixture<AssignprivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignprivilegesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignprivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
