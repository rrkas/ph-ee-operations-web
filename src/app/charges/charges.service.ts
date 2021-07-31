/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/**
 * Charges service.
 */
@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @returns {Observable<any>} Charges data.
   */
   getCharges(): Observable<any> {
    return this.http.get('/charges');
  }

  getChargesTemplate(): Observable<any> {
    return this.http.get('/charges/template');
  }

  
  /**
   * @param {string} chargeId Charge ID of charge.
   * @returns {Observable<any>} Charge.
   */
   getCharge(selectedCharge: string, template: boolean = false): Observable<any> {
    const httpParams = new HttpParams().set('template', template.toString());
    return this.http.get(`/charges/${selectedCharge}`, { params: httpParams });
  }

  /**
   * @param chargeId Charge Id to be updated.
   * @param charges  Charge Data to be updated.
   */
  updateCharge(chargeId: string, charges: any): Observable<any> {
    return this.http.put(`/charges/${chargeId}`, charges);
  }

  /**
   * @param {string} chargeId  Charge ID of Charge to be deleted.
   * @returns {Observable<any>}
   */
  deleteCharge(chargeId: string): Observable<any> {
    return this.http.delete(`/charges/${chargeId}`);
  }

  /**
   * @param {any} charge Charge to be created.
   * @returns {Observable<any>}
   */
  createCharge(charge: any): Observable<any> {
    return this.http.post('/charges', charge);
  }
  
}