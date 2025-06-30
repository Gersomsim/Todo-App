import { BaseAdapter } from '@infrastructure/adapters/common/base.adapter';
import { BaseRepository as Repository } from '@core/domain/repositories/common/base.repository';

export abstract class BaseRepository<T, Persistence> implements Repository<T> {
  constructor(private readonly baseAdapter: BaseAdapter<T, Persistence>) {}

  async getAll(filters?: any): Promise<T[]> {
    return this.baseAdapter.getAll(filters);
  }

  async getById(id: string): Promise<T> {
    return this.baseAdapter.getById(id);
  }

  async create(body: any): Promise<T> {
    return this.baseAdapter.create(body);
  }

  async updateById(id: string, body: any): Promise<T> {
    return this.baseAdapter.update(id, body);
  }

  async deleteById(id: string): Promise<T> {
    return this.baseAdapter.delete(id);
  }
}
