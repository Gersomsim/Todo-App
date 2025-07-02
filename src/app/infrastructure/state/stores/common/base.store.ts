import { createStore, Store, withProps } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { map, Observable } from 'rxjs';

interface BaseStateType<T> {
  entity: T | null;
  loading: boolean;
  error: string | null;
}

export abstract class BaseStore<T extends { id: string }> {
  protected store: Store<any>;

  constructor(name: string, persist: boolean = false) {
    this.store = createStore(
      { name },
      withProps<BaseStateType<T>>({
        entity: null,
        loading: false,
        error: null,
      }),
      withEntities<T>()
    );
    if (persist) {
      persistState(this.store, {
        storage: localStorageStrategy,
      });
    }
  }
  setLoading(loading: boolean) {
    this.store.update((state) => ({
      ...state,
      loading,
    }));
  }
  loading(): Observable<boolean> {
    return this.store.pipe(map((state) => state.loading));
  }
  setError(error: string) {
    this.store.update((state) => ({
      ...state,
      error,
    }));
  }
  error(): Observable<string | null> {
    return this.store.pipe(map((state) => state.error));
  }
  // entity
  setEntity(entity: T | null) {
    this.store.update((state) => ({
      ...state,
      entity,
    }));
  }
  entity(): Observable<T | null> {
    return this.store.pipe(map((state) => state.entity));
  }
  removeEntity() {
    this.store.update((state) => ({
      ...state,
      entity: null,
    }));
  }
  updateEntity(entity: Partial<T>) {
    this.store.update((state) => ({
      ...state,
      entity: { ...state.entity, ...entity },
    }));
  }
  // entities
  setEntities(entities: T[]) {
    this.store.update(setEntities(entities));
  }
  entities(): Observable<T[]> {
    return this.store.pipe(selectAllEntities());
  }
  addEntity(entity: T) {
    this.store.pipe(selectAllEntities()).subscribe((entities) => {
      this.store.update(setEntities([...entities, entity]));
    });
  }
  updateEntityById(id: string, entity: Partial<T>) {
    this.store.pipe(selectAllEntities()).subscribe((entities) => {
      const index = entities.findIndex((e) => e.id === id);
      if (index !== -1) {
        entities[index] = { ...entities[index], ...entity };
        this.store.update(setEntities(entities));
      }
    });
  }
  removeEntityById(id: string) {
    this.store.pipe(selectAllEntities()).subscribe((entities) => {
      const index = entities.findIndex((e) => e.id === id);
      if (index !== -1) {
        entities.splice(index, 1);
        this.store.update(setEntities(entities));
      }
    });
  }
  removeAllEntities() {
    this.store.update((state) => ({
      ...state,
      entities: [],
    }));
  }
}
