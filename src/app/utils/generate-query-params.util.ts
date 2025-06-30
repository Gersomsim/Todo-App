import { HttpParams } from '@angular/common/http';

export const generateQueryParams = (filters: any): HttpParams => {
  if (!filters) return new HttpParams();

  let params = new HttpParams();
  for (const filter in filters) {
    if (filters[filter] != undefined) {
      params = params.set(filter, filters[filter]);
    }
  }
  return params;
};
