import { Component, OnInit } from '@angular/core';
import { PhysicalData } from '../../model/physical_data';
@Component({
    moduleId: module.id,
    selector: 'logical_view',
    templateUrl: 'logical_view.html',
    styleUrls: ['logical_view.css']
})
export class Page4LogicalView {
    areas = AREAS;
    physicaldatas = PhysicalDatas;
}
export class Area {
    area: string;
    position: string;
}


const AREAS : Area[] = [
    {area : 'U-Key',position:'L1'},
    {area : 'OSS',position:'L2'},
    {area : 'Online',position:'L2'},
    {area : 'intranet',position:'L3'},
]


const PhysicalDatas: PhysicalData[] = [
    {name:'System A'},
    {name:'System B'},
    {name:'System C'},
    {name:'System D'},
    {name:'System E'},
    {name:'System F'},
    {name:'System G'},
]