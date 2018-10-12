import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ListComponent {
  @Input() item;
  @Input() type;
}
