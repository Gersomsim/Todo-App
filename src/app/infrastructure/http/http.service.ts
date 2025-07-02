import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateQueryParams } from '../../utils';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) {}

  get<T>(url: string, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.get<T>(`${this.apiUrl}${url}`, { params });
  }

  post<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.post<T>(`${this.apiUrl}${url}`, body, { params });
  }

  put<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.put<T>(`${this.apiUrl}${url}`, body, { params });
  }

  patch<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.patch<T>(`${this.apiUrl}${url}`, body, { params });
  }

  delete<T>(url: string, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.delete<T>(`${this.apiUrl}${url}`, { params });
  }
}
