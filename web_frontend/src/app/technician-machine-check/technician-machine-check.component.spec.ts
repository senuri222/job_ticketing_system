import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianMachineCheckComponent } from './technician-machine-check.component';

describe('TechnicianMachineCheckComponent', () => {
  let component: TechnicianMachineCheckComponent;
  let fixture: ComponentFixture<TechnicianMachineCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianMachineCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianMachineCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
