import { Injectable } from '@angular/core';
import { BaseMapper } from './base.mapper';

@Injectable({ providedIn: 'root' })
export class CommonMapper extends BaseMapper<any, any> {
  /**
   * Convert a persistence object to a domain object
   * @param persistence - The persistence object to convert
   * @returns The converted domain object
   */
  override toDomain(persistence: any) {
    if (!persistence) return undefined;
    return this.convertKeysToCamelCase(persistence);
  }

  override toPersistence(domain: any) {
    if (!domain) return undefined;
    return this.convertKeysToSnakeCase(domain);
  }
}
