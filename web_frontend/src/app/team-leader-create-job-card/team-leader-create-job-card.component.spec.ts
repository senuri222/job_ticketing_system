import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderCreateJobCardComponent } from './team-leader-create-job-card.component';

describe('TeamLeaderCreateJobCardComponent', () => {
  let component: TeamLeaderCreateJobCardComponent;
  let fixture: ComponentFixture<TeamLeaderCreateJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderCreateJobCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderCreateJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
