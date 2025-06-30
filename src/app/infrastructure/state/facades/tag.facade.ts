import { Injectable } from '@angular/core';
import { FacadeBase } from './common/facade.base';
import { Tag } from '@core/domain/models';
import { TagStore } from '../stores/tag.store';
import {
  CreateTagUseCase,
  UpdateTagUseCase,
  DeleteTagUseCase,
  GetTagByIdUseCase,
  GetAllTagUseCase,
} from '@core/application/use-cases';

/**
 * Facade para la gestión de etiquetas
 */
@Injectable({ providedIn: 'root' })
export class TagFacade extends FacadeBase<Tag> {
  constructor(
    override readonly store: TagStore,
    override readonly createUseCase: CreateTagUseCase,
    override readonly updateUseCase: UpdateTagUseCase,
    override readonly deleteUseCase: DeleteTagUseCase,
    override readonly getByIdUseCase: GetTagByIdUseCase,
    override readonly getAllUseCase: GetAllTagUseCase
  ) {
    super(
      store,
      getAllUseCase,
      getByIdUseCase,
      createUseCase,
      updateUseCase,
      deleteUseCase
    );
  }
}
