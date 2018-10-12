import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
  selector: 'app-section-education-conferences',
  templateUrl: './educationConferences.html',
  styleUrls: ['./educationConferences.scss']
})
export class EducationConferencesComponent implements AfterViewInit {

  @ViewChild('education') educationSection: ElementRef;
  @ViewChild('conferences') conferencesSection: ElementRef;

  constructor(public portfolio: Shared) { }

  ngAfterViewInit() {
    this.portfolio.sections['education'] = this.educationSection;
    this.portfolio.sections['conferences'] = this.conferencesSection;
  }
}
