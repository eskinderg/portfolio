
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatChipsModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [ CommonModule, MatDividerModule, FlexLayoutModule, MatIconModule, MatChipsModule ],
  declarations: [ TimelineComponent ],
  exports:      [ TimelineComponent ]
})

export class TimelineModule {};
