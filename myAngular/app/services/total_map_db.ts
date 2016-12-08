import {InMemoryDbService} from 'angular-in-memory-web-api';
export class TotalMapDB implements InMemoryDbService{
    createDb(){
        let datas =[
            {id:1,value:'4'},
            {id:2,value:'6'},
            {id:3,value:'497.2'},
            {id:4,value:'302.5'},
            {id:5,value:'4'},
            {id:6,value:'252.4'},
            {id:6,value:'144.0'},
            {id:6,value:'57.1%'},
        ];
        return {datas};
    }
}