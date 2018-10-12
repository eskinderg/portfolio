import { Injectable, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class Shared {

  public texts;
  public loading = false;
  public sections = {};

  constructor(public http: HttpClient) {}
  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  menuVisible = false;

  toggleMenu(value?) {
    if (value || value === false) {
      this.menuVisible = value;
    } else {
      // tslint:disable-next-line:no-unused-expression triple-equals
      this.menuVisible != this.menuVisible;
    }

    this.menu.emit(this.menuVisible);
  }

  getTexts() {
    return this.http.get(environment.lang);
  }

}
