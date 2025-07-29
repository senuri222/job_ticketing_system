import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianSidebarComponent } from './technician-sidebar.component';

describe('TechnicianSidebarComponent', () => {
  let component: TechnicianSidebarComponent;
  let fixture: ComponentFixture<TechnicianSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
