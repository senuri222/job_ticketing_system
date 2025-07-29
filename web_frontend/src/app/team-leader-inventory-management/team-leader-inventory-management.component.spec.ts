import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderInventoryManagementComponent } from './team-leader-inventory-management.component';

describe('TeamLeaderInventoryManagementComponent', () => {
  let component: TeamLeaderInventoryManagementComponent;
  let fixture: ComponentFixture<TeamLeaderInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderInventoryManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
