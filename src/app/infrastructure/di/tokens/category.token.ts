import { InjectionToken } from '@angular/core';
import { CategoryRepository } from '@core/domain/repositories/category.repository';

/**
 * Token de inyección de dependencias para CategoryRepository
 */
export const CATEGORY_REPOSITORY_TOKEN = new InjectionToken<CategoryRepository>(
  'CategoryRepository'
);
