import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersTableComponent,
    MainMenuComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
