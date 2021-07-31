/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { ChargesService } from './charges.service';

/** Custom Services */
// import { ChargesService } from '../Charges.service';

/**
 * Charges template data resolver.
 */
@Injectable()
export class ChargesTemplateResolver implements Resolve<Object> {

  /**
   * @param {ChargesService} ChargesService Charges service.
   */
  constructor(
    private chargesService: ChargesService
    ) {}

  /**
   * Returns the charges template data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.chargesService.getChargesTemplate();
    // return null;
  }

}
