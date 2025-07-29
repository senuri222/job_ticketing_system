import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianRequestSparePartsComponent } from './technician-request-spare-parts.component';

describe('TechnicianRequestSparePartsComponent', () => {
  let component: TechnicianRequestSparePartsComponent;
  let fixture: ComponentFixture<TechnicianRequestSparePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianRequestSparePartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianRequestSparePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
