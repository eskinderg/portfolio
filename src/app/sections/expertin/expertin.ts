import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
  selector: 'app-section-expertin',
  templateUrl: './expertin.html',
  styleUrls: ['./expertin.scss']
})
export class ExpertinComponent implements AfterViewInit {

  @ViewChild('technologies') expertinSection: ElementRef;

  constructor(public portfolio: Shared) { }

  ngAfterViewInit() {
    this.portfolio.sections['technologies'] = this.expertinSection;
  }
}
