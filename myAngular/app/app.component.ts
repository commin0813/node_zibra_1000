import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent {

  logo = 'NetApp';
  title = 'NetApp Insight Manager';
  firstmenu = 'Total Map';
  selectMenu : MenuName;
  
  menus = MenuNames;

  onSelect(selected: MenuName):void {
    this.selectMenu = selected;
    console.log('selected : ' + selected.route);
  }


}
export class MenuName {
  id: number;
  name: string;
  route: string;
}
const MenuNames: MenuName[] = [
  { id: 1, name: 'Total Map' ,route:'/total_map'},
  { id: 2, name: 'Physical View',route:'/physical_view' },
  { id: 3, name: 'Logical View',route:'/logical_view' },
]


