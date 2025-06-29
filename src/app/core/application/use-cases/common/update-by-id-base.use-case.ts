import { BaseRepository } from '@core/domain/repositories';

export abstract class UpdateByIdBaseUseCase<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  execute(id: string, item: T): Promise<T> {
    return this.repository.updateById(id, item);
  }
}
