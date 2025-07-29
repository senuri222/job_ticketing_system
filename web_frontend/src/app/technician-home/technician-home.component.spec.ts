import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianHomeComponent } from './technician-home.component';

describe('TechnicianHomeComponent', () => {
  let component: TechnicianHomeComponent;
  let fixture: ComponentFixture<TechnicianHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
