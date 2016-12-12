import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page4Tree } from './pages/tree/tree';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Page4Tree],
  bootstrap: [AppComponent]
})
export class AppModule { }
