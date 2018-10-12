import { Component, OnInit, ElementRef } from '@angular/core';
import { Shared } from '../../providers/shared';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-component-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(350, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(350, style({opacity: 0}))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  public hovered: any;
  public visible: boolean;
  public atTop = true;

  constructor(public portfolio: Shared) {

  }

  ngOnInit() {
    this.portfolio.menu.subscribe( value => {
      this.visible = value;
    });
  }

  onHover(link) {
    this.hovered = link;
  }
  onMouseOut() {
    this.hovered = '';
  }

  toggleMenu() {
    this.portfolio.toggleMenu(!this.visible);
  }

  onScroll(event) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    // console.log(scrollTop);
    if (scrollTop === 0) {
      this.atTop = true;
    } else {
      this.atTop = false;
    }
  }

  scrollTo(element) {
    // console.log(element);
    this.visible = false;
    const section = this.portfolio.sections[element];
    // console.log(section);
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
