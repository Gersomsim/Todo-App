import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { generateQueryParams } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly ApiUrl = 'http://localhost:3000/api/alfa/';
  constructor(private readonly httpClient: HttpClient) {}

  get<T>(url: string, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.get<T>(`${this.ApiUrl}${url}`, { params });
  }

  post<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.post<T>(`${this.ApiUrl}${url}`, body, { params });
  }

  put<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.put<T>(`${this.ApiUrl}${url}`, body, { params });
  }

  patch<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.patch<T>(`${this.ApiUrl}${url}`, body, { params });
  }

  delete<T>(url: string, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.delete<T>(`${this.ApiUrl}${url}`, { params });
  }
}
