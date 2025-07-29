import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderHomeComponent } from './team-leader-home.component';

describe('TeamLeaderHomeComponent', () => {
  let component: TeamLeaderHomeComponent;
  let fixture: ComponentFixture<TeamLeaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
