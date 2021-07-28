/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Not Found Component
import {NotFoundComponent} from './not-found/not-found.component';

/** Charges */
import { ChargesComponent } from './charges/charges.component';
import { extract } from './core/i18n/i18n.service';
import { CreateChargeComponent } from './charges/create-charge/create-charge.component';
import { ChargesTemplateResolver } from './charges/charges-template.resolver';
import { ChargesResolver } from './charges/charges.resolver';
import { ViewChargeComponent } from './charges/view-charge/view-charge.component';
import { ChargeResolver } from './charges/charge.resolver';
import { ChargesTemplateAndResolver } from './charges/charges-template-and-resolver';
import { EditChargeComponent } from './charges/edit-charge/edit-charge.component';

/**
 * Fallback to this route when no prior route is matched.
 */
const routes: Routes = [
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
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
];

/**
 * App Routing Module.
 *
 * Configures the fallback route.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
