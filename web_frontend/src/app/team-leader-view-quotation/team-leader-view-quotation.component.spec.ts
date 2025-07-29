import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderViewQuotationComponent } from './team-leader-view-quotation.component';

describe('TeamLeaderViewQuotationComponent', () => {
  let component: TeamLeaderViewQuotationComponent;
  let fixture: ComponentFixture<TeamLeaderViewQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamLeaderViewQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderViewQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
