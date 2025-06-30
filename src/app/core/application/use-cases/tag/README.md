# Módulo de Casos de Uso - Tag

Este módulo contiene todos los casos de uso relacionados con la entidad `Tag` siguiendo la arquitectura hexagonal.

## Casos de Uso Disponibles

### 1. CreateTagUseCase

- **Propósito**: Crear una nueva etiqueta
- **Clase Base**: `CreateBaseUseCase<Tag>`
- **Inyección**: `TagRepository` a través de `TAG_REPOSITORY_TOKEN`

### 2. UpdateTagUseCase

- **Propósito**: Actualizar una etiqueta existente por ID
- **Clase Base**: `UpdateByIdBaseUseCase<Tag>`
- **Inyección**: `TagRepository` a través de `TAG_REPOSITORY_TOKEN`

### 3. DeleteTagUseCase

- **Propósito**: Eliminar una etiqueta por ID
- **Clase Base**: `DeleteByIdBaseUseCase<Tag>`
- **Inyección**: `TagRepository` a través de `TAG_REPOSITORY_TOKEN`

### 4. GetTagByIdUseCase

- **Propósito**: Obtener una etiqueta específica por ID
- **Clase Base**: `GetByIdBaseUseCase<Tag>`
- **Inyección**: `TagRepository` a través de `TAG_REPOSITORY_TOKEN`

### 5. GetAllTagUseCase

- **Propósito**: Obtener todas las etiquetas
- **Clase Base**: `GetAllBaseUseCase<Tag>`
- **Inyección**: `TagRepository` a través de `TAG_REPOSITORY_TOKEN`

## Uso

Todos los casos de uso están decorados con `@Injectable({ providedIn: 'root' })` y pueden ser inyectados directamente en los componentes o servicios que los necesiten.

```typescript
constructor(
  private createTagUseCase: CreateTagUseCase,
  private getAllTagUseCase: GetAllTagUseCase
) {}
```

## Dependencias

- `TagRepository`: Interfaz del repositorio de dominio
- `TAG_REPOSITORY_TOKEN`: Token de inyección de dependencias
- Clases base de casos de uso comunes
