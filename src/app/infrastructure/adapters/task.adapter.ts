import { Injectable } from '@angular/core';
import { BaseAdapter } from './common/base.adapter';
import { Task } from '@core/domain/models';
import { HttpService } from '@infrastructure/http/http.service';
import { CommonMapper } from '@core/application/mappers/common/common.mapper';
import { lastValueFrom, map } from 'rxjs';
import { ApiResponse } from '@shared/interfaces';

/**
 * Adaptador de infraestructura para la entidad Task
 */
@Injectable({ providedIn: 'root' })
export class TaskAdapter extends BaseAdapter<Task, any> {
  protected override readonly baseUrl: string = 'tasks';

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: CommonMapper
  ) {
    super(httpService, mapper);
  }

  async markAsCompleted(id: string): Promise<Task> {
    const response = this.httpService
      .patch<ApiResponse<Task>>(`${this.baseUrl}/${id}/complete`, {})
      .pipe(map((response) => response.data));
    return lastValueFrom(response);
  }
}
