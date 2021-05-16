import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform {

  constructor(private translate: LanguageService) {}

  transform(key: any, section: any): any {
    // const x = this.translate.text['about']['title'];
    // debugger;
    // return this.translate.text[key] || key;
    // console.log(this.translate.text[key]);
    // var k = Object.keys(this.translate.text[key][section]);
    // console.log(k);
    return this.translate.text[key][section]
    // return this.translate.text['key'](key).map(key => key[key]);
    // return x;
  }

}
