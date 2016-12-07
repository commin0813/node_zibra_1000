import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page4Board } from './pages/board/board';
import { Page4Menu } from './pages/menu/menu';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Page4Board, Page4Menu],
  bootstrap: [AppComponent]
})
export class AppModule { }
