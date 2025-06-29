import { BaseRepository } from '@core/domain/repositories';

export abstract class CreateBaseUseCase<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  execute(item: T): Promise<T> {
    return this.repository.create(item);
  }
}
