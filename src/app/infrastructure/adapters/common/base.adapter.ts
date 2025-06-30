import { CommonMapper } from '@core/application/mappers/common/common.mapper';
import { HttpService } from '@infrastructure/http/http.service';
import { ApiResponse } from '@shared/interfaces';
import { lastValueFrom, map, Observable } from 'rxjs';

export abstract class BaseAdapter<T, Persistence> {
  protected abstract baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: CommonMapper
  ) {}

  async getAll(filters?: any): Promise<T[]> {
    const response = this.httpService
      .get<ApiResponse<Persistence[]>>(this.baseUrl, filters)
      .pipe(
        map((response) =>
          response.data.map((item) => this.mapper.toDomain(item))
        )
      );
    return lastValueFrom(response);
  }

  async getById(id: string): Promise<T> {
    const response = this.httpService
      .get<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => this.mapper.toDomain(response.data)));
    return lastValueFrom(response);
  }

  async create(body: any): Promise<T> {
    const response = this.httpService
      .post<ApiResponse<Persistence>>(this.baseUrl, body)
      .pipe(map((response) => this.mapper.toDomain(response.data)));
    return lastValueFrom(response);
  }

  async update(id: string, body: any): Promise<T> {
    const response = this.httpService
      .put<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`, body)
      .pipe(map((response) => this.mapper.toDomain(response.data)));
    return lastValueFrom(response);
  }

  async delete(id: string): Promise<void> {
    const response = this.httpService
      .delete<ApiResponse<Persistence>>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => this.mapper.toDomain(response.data)));
    return lastValueFrom(response);
  }
}
