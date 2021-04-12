import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetailsComponent } from './ranking-details.component';

describe('RankingDetailsComponent', () => {
  let component: RankingDetailsComponent;
  let fixture: ComponentFixture<RankingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
