import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temperatures } from '../models/temperatures';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3000/temperatures';
  constructor(private http: HttpClient) {}

  getTemperatures(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  addTemperature(temperature: Temperatures): Observable<Temperatures> {
    return this.http.post<Temperatures>(this.baseUrl, temperature);
  }
}
