import { BaseRepository } from '@core/domain/repositories';

export abstract class GetAllBaseUseCase<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  execute(filters?: any): Promise<T[]> {
    return this.repository.getAll(filters);
  }
}
