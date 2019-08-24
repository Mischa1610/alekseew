import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'me-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('appShell', { static: true })
  private appShell!: ElementRef<HTMLDivElement>;

  constructor() {
    console.log(
      `%cAPP: ${environment.appTitle}; VERSION: ${
        environment.appVersion
      }; ENV-NAME: ${environment.envName}`,
      'color: blue; font-weight: bold;',
    );
  }
}
