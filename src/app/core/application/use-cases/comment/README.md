# Módulo de Casos de Uso - Comment

Este módulo contiene todos los casos de uso relacionados con la entidad `Comment` siguiendo la arquitectura hexagonal.

## Casos de Uso Disponibles

### 1. CreateCommentUseCase

- **Propósito**: Crear un nuevo comentario
- **Clase Base**: `CreateBaseUseCase<Comment>`
- **Inyección**: `CommentRepository` a través de `COMMENT_REPOSITORY_TOKEN`

### 2. UpdateCommentUseCase

- **Propósito**: Actualizar un comentario existente por ID
- **Clase Base**: `UpdateByIdBaseUseCase<Comment>`
- **Inyección**: `CommentRepository` a través de `COMMENT_REPOSITORY_TOKEN`

### 3. DeleteCommentUseCase

- **Propósito**: Eliminar un comentario por ID
- **Clase Base**: `DeleteByIdBaseUseCase<Comment>`
- **Inyección**: `CommentRepository` a través de `COMMENT_REPOSITORY_TOKEN`

### 4. GetCommentByIdUseCase

- **Propósito**: Obtener un comentario específico por ID
- **Clase Base**: `GetByIdBaseUseCase<Comment>`
- **Inyección**: `CommentRepository` a través de `COMMENT_REPOSITORY_TOKEN`

### 5. GetAllCommentUseCase

- **Propósito**: Obtener todos los comentarios
- **Clase Base**: `GetAllBaseUseCase<Comment>`
- **Inyección**: `CommentRepository` a través de `COMMENT_REPOSITORY_TOKEN`

## Uso

Todos los casos de uso están decorados con `@Injectable({ providedIn: 'root' })` y pueden ser inyectados directamente en los componentes o servicios que los necesiten.

```typescript
constructor(
  private createCommentUseCase: CreateCommentUseCase,
  private getAllCommentUseCase: GetAllCommentUseCase
) {}
```

## Dependencias

- `CommentRepository`: Interfaz del repositorio de dominio
- `COMMENT_REPOSITORY_TOKEN`: Token de inyección de dependencias
- Clases base de casos de uso comunes

## Modelo de Datos

El modelo `Comment` incluye:

- `id`: Identificador único del comentario
- `content`: Contenido del comentario
- `createdAt`: Fecha de creación
- `updatedAt`: Fecha de última actualización
