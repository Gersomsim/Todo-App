import { CommonMapper } from '@core/application/mappers/common/common.mapper';
import { HttpService } from '@infrastructure/http/http.service';
import { ApiResponse } from '@shared/interfaces';
import { lastValueFrom, map, Observable } from 'rxjs';

export abstract class BaseAdapter<T, Persistence> {
  protected abstract baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly mapperCommon: CommonMapper
  ) {}

  async getAll(filters?: any): Promise<T[]> {
    const response = this.http
      .get<ApiResponse<Persistence[]>>(this.baseUrl, filters)
      .pipe(
        map((response) =>
          response.data.map((item) => this.mapperCommon.toDomain(item))
        )
      );
    return lastValueFrom(response);
  }

  async getById(id: string): Promise<T> {
    const response = this.http
      .get<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => this.mapperCommon.toDomain(response.data)));
    return lastValueFrom(response);
  }

  async create(body: any): Promise<T> {
    const response = this.http
      .post<ApiResponse<Persistence>>(this.baseUrl, body)
      .pipe(map((response) => this.mapperCommon.toDomain(response.data)));
    return lastValueFrom(response);
  }

  async update(id: string, body: any): Promise<T> {
    const response = this.http
      .patch<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`, body)
      .pipe(map((response) => this.mapperCommon.toDomain(response.data)));
    return lastValueFrom(response);
  }

  async delete(id: string): Promise<T> {
    const response = this.http
      .delete<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => this.mapperCommon.toDomain(response.data)));
    return lastValueFrom(response);
  }
}
