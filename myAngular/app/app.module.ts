import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page4TotalMap } from './pages/totalmap/totalmap';
import { Page4PhysicalView } from './pages/physicalview/physicalview';
import { Page4LogicalView } from './pages/logicalview/logicalview';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot([
    {path:'totalmap',component:Page4TotalMap},
    {path:'',component:Page4TotalMap},
    {path:'physicalview',component:Page4PhysicalView},
    {path:'logicalview',component:Page4LogicalView}
  ])],

  declarations: [AppComponent,Page4TotalMap,Page4PhysicalView,Page4LogicalView],
  bootstrap: [AppComponent]
})
export class AppModule { }
