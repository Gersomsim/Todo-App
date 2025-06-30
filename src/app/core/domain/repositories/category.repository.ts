import { BaseRepository } from './common/base.repository';
import { Category } from '../models/category.model';

/**
 * Interfaz del repositorio para la entidad Category
 */
export interface CategoryRepository extends BaseRepository<Category> {}
