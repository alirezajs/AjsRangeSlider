import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjsRangeSliderComponent } from './ajs-range-slider.component';

describe('LibeAjsRangeSliderComponent', () => {
  let component: AjsRangeSliderComponent;
  let fixture: ComponentFixture<AjsRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjsRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjsRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
