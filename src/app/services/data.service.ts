import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTemperatures(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temperatures`);
  }
}