import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private readonly httpClient: HttpClient) {}

  fetch(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      `${environment.apiBaseUrl}/customers`
    );
  }

  paginate(page = 1, limit = 20): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      `${environment.apiBaseUrl}/customers?_page=${page}&_limit=${limit}`
    );
  }

  slice(
    start: number,
    end: number
  ): Observable<{ customers: Customer[]; totalCount: number }> {
    return this.httpClient
      .get<Customer[]>(
        `${environment.apiBaseUrl}/customers?_start=${start}&_end=${end}`,
        { observe: 'response' }
      )
      .pipe(
        map(response => ({
          customers: response.body,
          totalCount: Number(response.headers.get('X-Total-Count'))
        }))
      );
  }

  update(id: number, changes: Partial<Customer>) {
    return this.httpClient.put(
      `${environment.apiBaseUrl}/customers/${id}`,
      changes
    );
  }
}
