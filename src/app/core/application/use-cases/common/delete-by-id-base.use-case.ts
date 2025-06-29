import { BaseRepository } from '@core/domain/repositories';

export abstract class DeleteByIdBaseUseCase<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  execute(id: string): Promise<T> {
    return this.repository.deleteById(id);
  }
}
