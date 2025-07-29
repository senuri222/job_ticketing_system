import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddIndividualsComponent } from './admin-add-individuals.component';

describe('AdminAddIndividualsComponent', () => {
  let component: AdminAddIndividualsComponent;
  let fixture: ComponentFixture<AdminAddIndividualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddIndividualsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
