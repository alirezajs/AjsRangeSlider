import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibeAjsRangeSliderComponent } from './libe-ajs-range-slider.component';

describe('LibeAjsRangeSliderComponent', () => {
  let component: LibeAjsRangeSliderComponent;
  let fixture: ComponentFixture<LibeAjsRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibeAjsRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibeAjsRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
