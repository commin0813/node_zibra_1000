import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent {

  logo = 'Google 드라이브';

  selectMenu: string;

  constructor() { this.selectMenu = 'mydrive' };

  Onselected(selected: string): void {
    this.selectMenu = selected;
    console.log('selected : ' + selected);
  }
}
