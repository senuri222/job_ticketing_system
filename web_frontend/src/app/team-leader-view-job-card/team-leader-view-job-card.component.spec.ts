import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderViewJobCardComponent } from './team-leader-view-job-card.component';

describe('TeamLeaderViewJobCardComponent', () => {
  let component: TeamLeaderViewJobCardComponent;
  let fixture: ComponentFixture<TeamLeaderViewJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderViewJobCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderViewJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
