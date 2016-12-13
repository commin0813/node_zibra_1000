import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    this.selected_menu = 'Total Map';
  }
  selected_menu: string;
  constructor() { }
  onSelected(selected_menu: string): void {
    this.selected_menu = selected_menu;
    console.log('selected : ' + this.selected_menu);
  }

}
