import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderSideBarComponent } from './team-leader-side-bar.component';

describe('TeamLeaderSideBarComponent', () => {
  let component: TeamLeaderSideBarComponent;
  let fixture: ComponentFixture<TeamLeaderSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
