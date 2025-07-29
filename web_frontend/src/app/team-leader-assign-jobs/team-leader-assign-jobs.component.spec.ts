import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderAssignJobsComponent } from './team-leader-assign-jobs.component';

describe('TeamLeaderAssignJobsComponent', () => {
  let component: TeamLeaderAssignJobsComponent;
  let fixture: ComponentFixture<TeamLeaderAssignJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderAssignJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderAssignJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
