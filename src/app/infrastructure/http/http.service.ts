import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@shared/interfaces';
import { Observable } from 'rxjs';
import { generateQueryParams } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  get<T>(url: string, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.get<T>(url, { params });
  }

  post<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.post<T>(url, body, { params });
  }

  put<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.put<T>(url, body, { params });
  }

  patch<T>(url: string, body: any, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.patch<T>(url, body, { params });
  }

  delete<T>(url: string, filters?: any): Observable<T> {
    const params = generateQueryParams(filters);
    return this.httpClient.delete<T>(url, { params });
  }
}
