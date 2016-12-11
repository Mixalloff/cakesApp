import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from "angular2-materialize";
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { StartDashboardComponent } from './start-dashboard/start-dashboard.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainHeaderComponent,
    OrdersTableComponent,
    StartDashboardComponent,
    ClientsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
