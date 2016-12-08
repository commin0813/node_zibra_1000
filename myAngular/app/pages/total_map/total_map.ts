import { Component, OnInit } from '@angular/core';
import {TotalData} from '../../model/total_data';

@Component({
    moduleId: module.id,
    selector: 'total_map',
    templateUrl: 'total_map.html',
    styleUrls: ['total_map.css']
})
export class Page4TotalMap {
    datas = TotalDatas;
}

const TotalDatas: TotalData[] = [
    {name:'data_center',value:4},
    {name:'service',value:4},
    {name:'Physical',value:497.2},
    {name:'use',value:144.0},
    {name:'Usable',value:302.5},
    {name:'use_rate',value:57.1},
]