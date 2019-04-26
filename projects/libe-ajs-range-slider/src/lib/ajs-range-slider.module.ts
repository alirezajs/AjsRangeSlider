import { NgModule } from '@angular/core';
import { AjsRangeSliderComponent } from './ajs-range-slider.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AjsRangeSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [AjsRangeSliderComponent]
})
export class AjsRangeSliderModule { }
