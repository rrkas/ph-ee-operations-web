/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ChargesService } from './charges.service';

/**
 * Charges data resolver.
 */
@Injectable()
export class ChargesResolver implements Resolve<Object> {

  /**
   * @param {chargesService} chargesService charges service.
   */
  constructor(
    private chargesService: ChargesService
    ) {}

  /**
   * Returns the charges data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.chargesService.getCharges();
  }

}
