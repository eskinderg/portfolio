
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './video';
import { MatIconModule, MatButtonModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatSlideToggleModule ],
  declarations: [ VideoComponent ],
  exports:      [ VideoComponent ]
})

export class VideoModule {}
