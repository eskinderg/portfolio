import { NgModule                                             }from '@angular/core';
import { CommonModule                                         }from '@angular/common';
import { MenuComponent                                        }from './menu';
import { MatIconModule, MatButtonModule, MatSlideToggleModule }from '@angular/material';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatSlideToggleModule ],
  declarations: [ MenuComponent ],
  exports:      [ MenuComponent ]
})

export class MenuModule {}
