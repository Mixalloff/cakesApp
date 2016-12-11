import { ClientsTableComponent } from './clients-table/clients-table.component';
import { asap } from 'rxjs/scheduler/asap';
import { ModuleWithProviders } from '@angular/core';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { StartDashboardComponent } from './start-dashboard/start-dashboard.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: StartDashboardComponent },
  { path: 'orders', component: OrdersTableComponent },
  { path: 'clients', component: ClientsTableComponent },
  { path: '*', component: StartDashboardComponent }
]

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);