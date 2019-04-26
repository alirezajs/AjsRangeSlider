import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AjsRangeSliderModule } from 'projects/libe-ajs-range-slider/src/public_api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,AjsRangeSliderModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
