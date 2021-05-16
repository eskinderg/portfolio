import { Component, Input }from '@angular/core';
import { Shared           }from '../../providers/shared';

@Component({
  selector: 'app-langselect',
  templateUrl: './langselect.html',
  styleUrls: ['./langselect.scss']
})
export class LangSelectComponent {

  public languages: any;

  constructor(public portfolio: Shared) {
    this.portfolio.getLangList().subscribe(lang => {
      this.languages = lang;
    })
  }

  changeLanguage(lang:string) {
    this.portfolio.getTexts(lang).subscribe(
      data => {
        this.portfolio.texts = data;
        localStorage.setItem('language',lang);
      },
      err => console.error(err)
    );
  }

}
