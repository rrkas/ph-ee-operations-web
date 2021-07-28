import { Injectable, NgModule } from '@angular/core';

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

@NgModule({
   declarations: [
      ChargesComponent,
      CreateChargeComponent,
      EditChargeComponent,
      ViewChargeComponent,
   ],
   imports: [HttpClientModule],
   providers: [
      ChargeResolver,
      ChargesResolver,
      ChargesTemplateResolver,
      ChargesTemplateAndResolver,
   ],
   bootstrap: [ChargesComponent]
})
@Injectable({
   providedIn: 'root'
})
export class ChargesModule { }