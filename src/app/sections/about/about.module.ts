import { NgModule                       }from '@angular/core';
import { CommonModule                   }from '@angular/common';
import { AboutComponent                 }from './about';
import { TitleModule                    }from '../../components';
import { MatButtonModule, MatMenuModule }from '@angular/material';
import { MatIconModule                  }from '@angular/material/icon';
import { FlexLayoutModule               }from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    TitleModule
  ],
  declarations: [ AboutComponent ],
  exports:      [ AboutComponent ]
})

export class AboutModule {}
