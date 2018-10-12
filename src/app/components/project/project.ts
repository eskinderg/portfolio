import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent {
  @Input('project') project;
}
