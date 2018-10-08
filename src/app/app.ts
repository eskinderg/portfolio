import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import { Shared } from './providers/shared';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(public portfolio: Shared, public ref: ChangeDetectorRef, public meta: Meta) {
    this.meta.addTags([
      {name: 'og:title', content: 'Eskinder | Profile'},
      {name: 'og:description', content: 'Hello, my name is Eskinder Gezahagne. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge, experience and skills with technology in order to develop professional and innovative web applications using open source technologies'},
      {name: 'og:image', content: '/assets/img/social-min.png'},
      {name: 'author', content: 'Eskinder'},
      {name: 'keywords', content: 'Angular, Web, Frontend, Developer, Portfolio, Eskinder, Gezahagne, Getahun'},
      {name: 'description', content: 'Hello, my name is Eskinder Gezahagne. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page. As confirmed by my portfolio content and code, I combine my knowledge, experience and skills with technology in order to develop professional and innovative web applications using open source technologies'}
    ]);
  }
  ngOnInit() {
    if (!this.portfolio.texts) {
      this.portfolio.getTexts().subscribe(
        data => {
          // console.log(data);
          this.portfolio.texts = data;
          this.ref.detectChanges();
        },
        err => console.error(err)
      );
    }
  }
}
