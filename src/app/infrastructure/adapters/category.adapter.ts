import { Injectable } from '@angular/core';
import { BaseAdapter } from './common/base.adapter';
import { Category } from '@core/domain/models/category.model';
import { HttpService } from '@infrastructure/http/http.service';
import { CommonMapper } from '@core/application/mappers/common/common.mapper';

/**
 * Adaptador para la entidad Category
 */
@Injectable({ providedIn: 'root' })
export class CategoryAdapter extends BaseAdapter<Category, any> {
  protected override readonly baseUrl: string = 'categories';

  constructor(
    readonly httpService: HttpService,
    readonly mapper: CommonMapper
  ) {
    super(httpService, mapper);
  }
}
