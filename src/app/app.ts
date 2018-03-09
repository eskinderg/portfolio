import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import { Shared } from './providers/shared';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit{

  constructor(public portfolio: Shared, public ref: ChangeDetectorRef, public meta: Meta){
    this.meta.addTags([
      {name: 'og:title', content: 'Eskinder | portfolio'},
      {name: 'og:description', content: 'Hello, my name is Eskinder Gezahagne. I am a WEb Developer ( Web / FE - Angular ) and this is my portfolio page.'},
      {name: 'og:image', content: '/assets/img/social-min.png'},
      {name: 'author', content: 'eskinder'},
      {name: 'keywords', content: 'Angular, Portfolio, eskinder, Gezahagne, Getahun'},
      {name: 'description', content: 'Hello, my name is Eskinder Gezahagne. I am a Web Developer ( Web / FE - Angular ) and this is my portfolio page.'}
    ]);
  }
  ngOnInit(){
    if(!this.portfolio.texts){
      this.portfolio.getTexts().subscribe(
        data => {
          console.log(data);
          this.portfolio.texts = data;
          this.ref.detectChanges();
        },
        err => console.error(err)
      );
    }
  }
}
