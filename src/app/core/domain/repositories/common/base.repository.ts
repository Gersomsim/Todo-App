export abstract class BaseRepository<T> {
  abstract getAll(params: any): Promise<T[]>;
  abstract getById(id: string): Promise<T | null>;
  abstract create(item: T): Promise<T>;
  abstract updateById(id: string, item: Partial<T>): Promise<T>;
  abstract deleteById(id: string): Promise<T>;
}
