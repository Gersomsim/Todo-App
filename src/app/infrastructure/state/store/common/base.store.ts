import { Injectable } from '@angular/core';
import { createStore, Store, withProps } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
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
    this.store.update((state) => ({
      ...state,
      entities,
    }));
  }
  entities(): Observable<T[]> {
    return this.store.pipe(map((state) => state.entities));
  }
  addEntity(entity: T) {
    this.store.update((state) => ({
      ...state,
      entities: [...state.entities, entity],
    }));
  }
  updateEntityById(id: string, entity: Partial<T>) {
    this.store.update((state) => ({
      ...state,
      entities: state.entities.map((e: T) =>
        e.id === id ? { ...e, ...entity } : e
      ),
    }));
  }
  removeEntityById(id: string) {
    this.store.update((state) => ({
      ...state,
      entities: state.entities.filter((e: T) => e.id !== id),
    }));
  }
  removeAllEntities() {
    this.store.update((state) => ({
      ...state,
      entities: [],
    }));
  }
}
