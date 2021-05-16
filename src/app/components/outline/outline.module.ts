import { NgModule                                             }from '@angular/core';
import { CommonModule                                         }from '@angular/common';
import { MatIconModule, MatButtonModule, MatSlideToggleModule }from '@angular/material';
import { OutlineComponent                                     }from './outline';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [ OutlineComponent ],
  exports:      [ OutlineComponent ]
})

export class OutlineModule {}
