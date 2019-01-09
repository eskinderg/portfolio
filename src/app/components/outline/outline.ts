import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Shared } from '../../providers/shared';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.html',
  styleUrls: ['./outline.scss']
})
export class OutlineComponent implements OnInit {

  @Input() currentSection = 'section1';

  constructor(public portfolio: Shared) { }

  ngOnInit() { }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(element) {
    const section = this.portfolio.sections[element];
    section.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  onHover(link) {
    // this.hovered = link;
  }
  onMouseOut() {
    // this.hovered = '';
  }

}
