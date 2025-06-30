import { Injectable } from '@angular/core';
import { BaseRepository } from './common/base.repository';
import { Tag } from '@core/domain/models';
import { TagRepository } from '@core/domain/repositories';
import { TagAdapter } from '@infrastructure/adapters/tag.adapter';

/**
 * Implementación del repositorio para la entidad Tag
 */
@Injectable()
export class TagRepositoryImpl
  extends BaseRepository<Tag, any>
  implements TagRepository
{
  constructor(private readonly tagAdapter: TagAdapter) {
    super(tagAdapter);
  }
}
