/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { ChargesService } from './charges.service';


/**
 * Charge data resolver.
 */
@Injectable()
export class ChargeResolver implements Resolve<Object> {

  /**
   * @param {ChargesService} chargesService Charges service.
   */
  constructor(
    private chargesService: ChargesService
    ) {}

  /**
   * Returns the charge data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const chargeId = route.paramMap.get('id');
    return this.chargesService.getCharge(chargeId);
  }

}
