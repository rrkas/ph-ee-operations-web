/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/** Charges */
import { ChargesComponent } from '../charges/charges.component';
import { CreateChargeComponent } from '../charges/create-charge/create-charge.component';
import { ChargesTemplateResolver } from '../charges/charges-template.resolver';
import { ChargesResolver } from '../charges/charges.resolver';
import { ViewChargeComponent } from '../charges/view-charge/view-charge.component';
import { ChargeResolver } from '../charges/charge.resolver';
import { ChargesTemplateAndResolver } from '../charges/charges-template-and-resolver';
import { EditChargeComponent } from '../charges/edit-charge/edit-charge.component';

/** Home and Dashboard Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: extract('Home') }
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: extract('Dashboard'), breadcrumb: 'Dashboard' }
    },
    {
      path: 'charges',
      data: { title: extract('Charges'), breadcrumb: 'Charges' },
      children: [
        {
          path: 'create',
          component: CreateChargeComponent,
          data: { title: extract('Create Charge'), breadcrumb: 'Create Charge' },
          resolve: {
            chargesTemplate: ChargesTemplateResolver
          }
        },
        {
          path: '',
          component: ChargesComponent,
          resolve: {
            charges: ChargesResolver
          }
        },
        {
          path: ':id',
          data: { title: extract('View Charges'), routeParamBreadcrumb: 'id' },
          children: [
            {
              path: '',
              component: ViewChargeComponent,
              resolve: {
                charge: ChargeResolver
              }
            },
            {
              path: 'edit',
              component: EditChargeComponent,
              data: { title: extract('Edit Charge'), breadcrumb: 'Edit', routeParamBreadcrumb: false },
              resolve: {
                chargesTemplate: ChargesTemplateAndResolver
              }
            },
          ]
        },
      ]
    }
  ])
];

/**
 * Home Routing Module
 *
 * Configures the home and dashboard routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
