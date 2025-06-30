export abstract class BaseMapper<Domain, Persistence> {
  abstract toPersistence(domain: Domain): Persistence;
  abstract toDomain(persistence: Persistence): Domain;

  protected convertKeysToCamelCase(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.convertKeysToCamelCase(item));
    } else if (obj !== null && typeof obj === 'object') {
      const newObj: any = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
          newObj[camelKey] = this.convertKeysToCamelCase(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  }

  protected convertKeysToSnakeCase(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.convertKeysToSnakeCase(item));
    } else if (obj !== null && typeof obj === 'object') {
      const newObj: any = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const snakeKey = key.replace(
            /[A-Z]/g,
            (letter) => `_${letter.toLowerCase()}`
          );
          newObj[snakeKey] = this.convertKeysToSnakeCase(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  }
}
