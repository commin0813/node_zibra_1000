import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page4TotalMap } from '../pages/total_map/total_map';
import { Page4LogicalView } from '../pages/logical_view/logical_view';
import { Page4PhysicalView } from '../pages/physical_view/physical_view';
const routes: Routes = [
    { path: '', redirectTo: '/total_map', pathMatch: 'full' },
    { path: 'total_map', component: Page4TotalMap },
    { path: 'logical_view', component: Page4LogicalView },
    { path: 'physical_view', component: Page4PhysicalView },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MyRouteModule { }