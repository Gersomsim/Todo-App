# Módulo Category

Este módulo contiene todos los casos de uso relacionados con la entidad `Category` siguiendo la arquitectura hexagonal.

## Casos de Uso

### CreateCategoryUseCase

- **Descripción**: Crea una nueva categoría
- **Clase base**: `CreateBaseUseCase<Category>`
- **Inyección**: `CategoryRepository` a través de `CATEGORY_REPOSITORY_TOKEN`

### UpdateCategoryUseCase

- **Descripción**: Actualiza una categoría existente por ID
- **Clase base**: `UpdateByIdBaseUseCase<Category>`
- **Inyección**: `CategoryRepository` a través de `CATEGORY_REPOSITORY_TOKEN`

### DeleteCategoryUseCase

- **Descripción**: Elimina una categoría por ID
- **Clase base**: `DeleteByIdBaseUseCase<Category>`
- **Inyección**: `CategoryRepository` a través de `CATEGORY_REPOSITORY_TOKEN`

### GetCategoryByIdUseCase

- **Descripción**: Obtiene una categoría por ID
- **Clase base**: `GetByIdBaseUseCase<Category>`
- **Inyección**: `CategoryRepository` a través de `CATEGORY_REPOSITORY_TOKEN`

### GetAllCategoryUseCase

- **Descripción**: Obtiene todas las categorías
- **Clase base**: `GetAllBaseUseCase<Category>`
- **Inyección**: `CategoryRepository` a través de `CATEGORY_REPOSITORY_TOKEN`

## Arquitectura

Todos los casos de uso siguen el patrón de arquitectura hexagonal:

1. **Domain Layer**: Define la interfaz `CategoryRepository`
2. **Application Layer**: Implementa los casos de uso que orquestan la lógica de negocio
3. **Infrastructure Layer**: Proporciona la implementación concreta del repositorio

## Uso

```typescript
// Inyección en un componente o servicio
constructor(
  private createCategoryUseCase: CreateCategoryUseCase,
  private getAllCategoryUseCase: GetAllCategoryUseCase
) {}

// Ejecutar casos de uso
async createCategory(category: Category) {
  return this.createCategoryUseCase.execute(category);
}

async getAllCategories() {
  return this.getAllCategoryUseCase.execute();
}
```
