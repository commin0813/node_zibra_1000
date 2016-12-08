import { Component, OnInit } from '@angular/core';
import { PhysicalData } from '../../model/physical_data';
@Component({
    moduleId: module.id,
    selector: 'physical_view',
    templateUrl: 'physical_view.html',
    styleUrls: ['physical_view.css']
})
export class Page4PhysicalView {
    areas = AREAS;
    physicaldatas = PhysicalDatas;
}
export class Area {
    area: string;
}

const AREAS : Area[] = [
    {area : '서울'},
    {area : '대전'},
    {area : '대구'},
    {area : '부산'},
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