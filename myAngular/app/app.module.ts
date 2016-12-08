import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyRouteModule } from './route/my-route.module';


import { TotalMapDB } from './services/total_map_db';

import { AppComponent } from './app.component';
import { Page4TotalMap } from './pages/total_map/total_map';
import { Page4LogicalView } from './pages/logical_view/logical_view';
import { Page4PhysicalView } from './pages/physical_view/physical_view';

@NgModule({
  imports: [
    BrowserModule,
    MyRouteModule,
  ],
  declarations: [
    AppComponent,
    Page4LogicalView,
    Page4TotalMap,
    Page4PhysicalView],
  bootstrap: [AppComponent]
})
export class AppModule { }
