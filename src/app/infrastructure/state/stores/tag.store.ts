import { BaseStore } from './common/base.store';
import { Tag } from '@core/domain/models';

/**
 * Store para la gestión del estado de las etiquetas
 */
export class TagStore extends BaseStore<Tag> {
  constructor() {
    super('tag');
  }
}
