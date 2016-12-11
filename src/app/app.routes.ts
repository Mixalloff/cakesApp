import { asap } from 'rxjs/scheduler/asap';
import { ModuleWithProviders } from '@angular/core';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { StartDashboardComponent } from './start-dashboard/start-dashboard.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: StartDashboardComponent },
  { path: 'orders', component: OrdersTableComponent }
]

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);