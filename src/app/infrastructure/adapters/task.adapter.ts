import { Injectable } from '@angular/core';
import { BaseAdapter } from './common/base.adapter';
import { Task } from '@core/domain/models';
import { HttpService } from '@infrastructure/http/http.service';
import { CommonMapper } from '@core/application/mappers/common/common.mapper';

/**
 * Adaptador de infraestructura para la entidad Task
 */
@Injectable({ providedIn: 'root' })
export class TaskAdapter extends BaseAdapter<Task, any> {
  protected override readonly baseUrl: string = 'tasks';

  constructor(httpService: HttpService, mapper: CommonMapper) {
    super(httpService, mapper);
  }
}
