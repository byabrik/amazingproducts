import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDetailPageComponent } from './deal-detail-page.component';

describe('DealDetailPageComponent', () => {
  let component: DealDetailPageComponent;
  let fixture: ComponentFixture<DealDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
