import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Shared } from './providers/shared';
import { Meta } from '@angular/platform-browser';
import { ThemeService } from './providers/theme.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { SpeedDialFabPosition } from './components/speeddial/speed-dial-fab.component';

@Component({
  selector: 'app-main',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isDarkTheme: Observable<boolean>;
  public selectedTheme: string = "blue-theme";

  private speedDialFabButtons = [
    {
      theme: 'dark-theme',
      icon: 'timeline',
      tooltip: 'Dark'
    },
    {
      theme: 'red-theme',
      icon: 'view_headline',
      tooltip: 'Red'
    },
    {
      theme: 'green-theme',
      tooltip: 'Green'
    },
    {
      theme: 'blue-theme',
      icon: 'lightbulb_outline',
      tooltip: 'Blue'
    },
    {
      theme: 'orange-theme',
      icon: 'lightbulb_outline',
      tooltip: 'Orange'
    },
    {
      theme: 'yellow-theme',
      icon: 'lock',
      tooltip: 'Yellow'
    },
    {
      theme: 'pink-theme',
      icon: 'lock',
      tooltip: 'Pink'
    },
    {
      theme: 'deeppurple-theme',
      icon: 'lock',
      tooltip: 'Deep Purple'
    },
    {
      theme: 'indigo-theme',
      icon: 'lock',
      tooltip: 'indigo'
    },
    {
      theme: 'lightblue-theme',
      icon: 'lock',
      tooltip: 'Light Blue'
    },
    {
      theme: 'cyan-theme',
      icon: 'lock',
      tooltip: 'Cyan'
    },
    {
      theme: 'brown-theme',
      icon: 'lock',
      tooltip: 'Brown'
    },
    {
      theme: 'bluegrey-theme',
      icon: 'lock',
      tooltip: 'Blue Grey'
    }
  ];

  SpeedDialFabPosition          = SpeedDialFabPosition;
  speedDialFabColumnDirection   = 'column';
  speedDialFabPosition          = SpeedDialFabPosition.Top;
  speedDialFabPositionClassName = 'speed-dial-container-top';

  constructor(
    private themeService: ThemeService,
    public portfolio: Shared,
    public ref: ChangeDetectorRef,
    public meta: Meta
  ) {
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

    this.isDarkTheme = this.themeService.isDarkTheme;

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

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  onSpeedDialFabClicked(btn: {icon: string, theme: string}) {
    this.selectedTheme = btn.theme;
    console.log(btn);
  }



}
