import { NgModule } from '@angular/core';
import { AjsRangeSliderComponent } from './ajs-range-slider.component';
import { CommonModule } from '@angular/common';
import { DraggableModule } from '../dragable/draggable.module';


@NgModule({
  declarations: [AjsRangeSliderComponent],
  imports: [
    CommonModule,
    DraggableModule
  ],
  exports: [AjsRangeSliderComponent,DraggableModule]
})
export class AjsRangeSliderModule { }
