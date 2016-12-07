import { Component } from '@angular/core';
import { Model4Menu } from '../../model/menu.model';
@Component({
    moduleId: module.id,
    selector: 'page-menu',
    templateUrl: 'menu.html',
    styleUrls: ['menu.css']

})

export class Page4Menu {
    menus = MENUS;
    
}

const MENUS: Model4Menu[] = [
    { id: 1, name: 'board' },
    { id: 2, name: 'login' }
]
