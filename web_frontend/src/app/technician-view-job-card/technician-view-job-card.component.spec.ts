import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianViewJobCardComponent } from './technician-view-job-card.component';

describe('TechnicianViewJobCardComponent', () => {
  let component: TechnicianViewJobCardComponent;
  let fixture: ComponentFixture<TechnicianViewJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianViewJobCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianViewJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
