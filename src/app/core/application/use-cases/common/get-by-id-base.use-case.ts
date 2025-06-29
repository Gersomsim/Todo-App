import { BaseRepository } from '@core/domain/repositories';

export abstract class GetByIdBaseUseCase<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  execute(id: string): Promise<T | null> {
    return this.repository.getById(id);
  }
}
