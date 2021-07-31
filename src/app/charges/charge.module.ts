import { Injectable, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

/** Charges */
import { ChargesComponent } from './charges.component';
import { CreateChargeComponent } from './create-charge/create-charge.component';
import { ChargesTemplateResolver } from './charges-template.resolver';
import { ChargesResolver } from './charges.resolver';
import { ViewChargeComponent } from './view-charge/view-charge.component';
import { ChargeResolver } from './charge.resolver';
import { ChargesTemplateAndResolver } from './charges-template-and-resolver';
import { EditChargeComponent } from './edit-charge/edit-charge.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'app/shared/shared.module';
import { MatCardModule } from '@angular/material';
import { HomeRoutingModule } from 'app/home/home-routing.module';

@NgModule({
   declarations: [
      ChargesComponent,
      CreateChargeComponent,
      EditChargeComponent,
      ViewChargeComponent,
   ],
   imports: [
      HttpClientModule,
      SharedModule,
      MatCardModule,
      HomeRoutingModule,
   ],
   providers: [
      ChargeResolver,
      ChargesResolver,
      ChargesTemplateResolver,
      ChargesTemplateAndResolver,
      DatePipe,
   ],
})
@Injectable({
   providedIn: 'root'
})
export class ChargesModule { }