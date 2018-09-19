import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaBackTopComponent } from './babacktop.component';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [ BaBackTopComponent ],
  exports:      [ BaBackTopComponent ]
})

export class BaBackTopModule {}
