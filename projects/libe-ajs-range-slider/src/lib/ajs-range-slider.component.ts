import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ajsRangeSlider',
  templateUrl: 'ajs-range-slider.component.html',
  styleUrls: ['ajs-range-slider.component.scss']
})
export class AjsRangeSliderComponent implements OnInit {
  @Input() minValue;
  @Input() maxValue;
  @Input() min;
  @Input() max;
  constructor() { }

  ngOnInit() {
  }

}
