import { Injectable } from '@angular/core';
import { BaseAdapter } from './common/base.adapter';
import { Tag } from '@core/domain/models';
import { HttpService } from '@infrastructure/http/http.service';
import { CommonMapper } from '@core/application/mappers/common/common.mapper';

/**
 * Adaptador para la entidad Tag
 */
@Injectable({ providedIn: 'root' })
export class TagAdapter extends BaseAdapter<Tag, any> {
  protected override readonly baseUrl: string = 'tags';

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: CommonMapper
  ) {
    super(httpService, mapper);
  }
}
