import { Component} from '@angular/core';
import { Shared } from '../providers/shared';

@Component({
  selector: 'app-lazy-view',
  templateUrl: './lazy.view.html'
})
export class LazyViewComponent {

  constructor(public portfolio: Shared) { }
}
