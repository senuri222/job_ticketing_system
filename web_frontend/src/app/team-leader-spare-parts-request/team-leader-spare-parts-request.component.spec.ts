import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderSparePartsRequestComponent } from './team-leader-spare-parts-request.component';

describe('TeamLeaderSparePartsRequestComponent', () => {
  let component: TeamLeaderSparePartsRequestComponent;
  let fixture: ComponentFixture<TeamLeaderSparePartsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderSparePartsRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderSparePartsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
