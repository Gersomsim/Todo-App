import { Observable } from 'rxjs';
import { BaseStore } from '../../stores';
import {
  CreateBaseUseCase,
  DeleteByIdBaseUseCase,
  GetAllBaseUseCase,
  GetByIdBaseUseCase,
  UpdateByIdBaseUseCase,
} from '@core/application/use-cases';

export abstract class FacadeBase<T extends { id: string }> {
  items$: Observable<T[]>;
  item$: Observable<T | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    protected store: BaseStore<T>,
    protected getAllUseCase: GetAllBaseUseCase<T>,
    protected getByIdUseCase: GetByIdBaseUseCase<T>,
    protected createUseCase: CreateBaseUseCase<T>,
    protected updateUseCase: UpdateByIdBaseUseCase<T>,
    protected deleteUseCase: DeleteByIdBaseUseCase<T>
  ) {
    this.items$ = store.entities();
    this.item$ = store.entity();
    this.loading$ = store.loading();
    this.error$ = store.error();
  }

  async loadAll(params?: any): Promise<void> {
    this.store.setLoading(true);
    try {
      const items = await this.getAllUseCase.execute(params);
      this.store.setEntities(items);
      this.store.setLoading(false);
    } catch (error) {
      this.store.setError(error as string);
      this.store.setLoading(false);
    }
  }
  async loadById(id: string): Promise<void> {
    this.store.setLoading(true);
    try {
      const item = await this.getByIdUseCase.execute(id);
      this.store.setEntity(item);
      this.store.setLoading(false);
    } catch (error) {
      this.store.setError(error as string);
      this.store.setLoading(false);
    }
  }
  async create(item: T): Promise<T | null> {
    this.store.setLoading(true);
    try {
      const newItem = await this.createUseCase.execute(item);
      this.store.addEntity(newItem);
      this.store.setLoading(false);
      return newItem;
    } catch (error) {
      this.store.setError(error as string);
      this.store.setLoading(false);
      return null;
    }
  }
  async update(id: string, item: Partial<T>, alone = false): Promise<T | null> {
    this.store.setLoading(true);
    try {
      const updatedItem = await this.updateUseCase.execute(id, item);
      if (alone) {
        this.store.updateEntity(updatedItem);
      } else {
        this.store.updateEntityById(id, updatedItem);
      }
      this.store.setLoading(false);
      return updatedItem;
    } catch (error) {
      this.store.setError(error as string);
      this.store.setLoading(false);
      return null;
    }
  }
  async delete(id: string): Promise<void> {
    this.store.setLoading(true);
    try {
      await this.deleteUseCase.execute(id);
      this.store.removeEntityById(id);
      this.store.setLoading(false);
    } catch (error) {
      this.store.setError(error as string);
      this.store.setLoading(false);
    }
  }
  async clear(): Promise<void> {
    this.store.setLoading(true);
    this.store.removeAllEntities();
    this.store.removeEntity();
  }
}
