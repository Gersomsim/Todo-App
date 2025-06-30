import { Injectable } from '@angular/core';
import { BaseAdapter } from './common/base.adapter';
import { Comment } from '@core/domain/models';
import { HttpService } from '@infrastructure/http/http.service';
import { CommonMapper } from '@core/application/mappers/common/common.mapper';

/**
 * Adaptador para la entidad Comment
 */
@Injectable({ providedIn: 'root' })
export class CommentAdapter extends BaseAdapter<Comment, any> {
  protected override readonly baseUrl: string = 'comments';

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: CommonMapper
  ) {
    super(httpService, mapper);
  }
}
