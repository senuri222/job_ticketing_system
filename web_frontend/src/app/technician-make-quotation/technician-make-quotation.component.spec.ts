import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianMakeQuotationComponent } from './technician-make-quotation.component';

describe('TechnicianMakeQuotationComponent', () => {
  let component: TechnicianMakeQuotationComponent;
  let fixture: ComponentFixture<TechnicianMakeQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianMakeQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianMakeQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
