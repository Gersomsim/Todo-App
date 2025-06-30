import { InjectionToken } from '@angular/core';
import { TagRepository } from '@core/domain/repositories';

/**
 * Token de inyección de dependencias para el repositorio de Tag
 */
export const TAG_REPOSITORY_TOKEN = new InjectionToken<TagRepository>(
  'TAG_REPOSITORY_TOKEN'
);
