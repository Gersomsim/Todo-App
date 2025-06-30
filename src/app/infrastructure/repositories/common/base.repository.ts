import { BaseAdapter } from '@infrastructure/adapters/common/base.adapter';
import { BaseRepository as Repository } from '@core/domain/repositories/common/base.repository';

export abstract class BaseRepository<T, Persistence> implements Repository<T> {
  constructor(private readonly adapter: BaseAdapter<T, Persistence>) {}

  async getAll(filters?: any): Promise<T[]> {
    return this.adapter.getAll(filters);
  }

  async getById(id: string): Promise<T> {
    return this.adapter.getById(id);
  }

  async create(body: any): Promise<T> {
    return this.adapter.create(body);
  }

  async updateById(id: string, body: any): Promise<T> {
    return this.adapter.update(id, body);
  }

  async deleteById(id: string): Promise<T> {
    return this.adapter.delete(id);
  }
}
