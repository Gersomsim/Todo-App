# Módulo de Task

Este módulo implementa la gestión completa de tareas siguiendo la arquitectura hexagonal en Angular.

## Estructura del Módulo

### Casos de Uso (Application Layer)

- `CreateTaskUseCase`: Crear nuevas tareas
- `UpdateTaskUseCase`: Actualizar tareas existentes
- `DeleteTaskUseCase`: Eliminar tareas
- `GetTaskByIdUseCase`: Obtener una tarea por ID
- `GetAllTaskUseCase`: Obtener todas las tareas

### Infraestructura

- `TaskAdapter`: Adaptador para comunicación con la API
- `TaskRepositoryImpl`: Implementación del repositorio
- `TaskStore`: Store de Elf para gestión de estado
- `TaskFacade`: Facade para interacción con el estado

### Inyección de Dependencias

- `TASK_REPOSITORY_TOKEN`: Token para inyección del repositorio

## Uso

### Inyección en Componentes

```typescript
import { Component } from "@angular/core";
import { TaskFacade } from "@infrastructure/state/facades/task.facade";
import { Task } from "@core/domain/models";

@Component({
  selector: "app-task-list",
  template: `
    <div *ngFor="let task of tasks$ | async">
      {{ task.title }}
    </div>
  `,
})
export class TaskListComponent {
  tasks$ = this.taskFacade.items$;

  constructor(private taskFacade: TaskFacade) {}

  ngOnInit() {
    this.taskFacade.loadAll();
  }

  createTask(task: Task) {
    this.taskFacade.create(task);
  }

  updateTask(id: string, task: Task) {
    this.taskFacade.update(id, task);
  }

  deleteTask(id: string) {
    this.taskFacade.delete(id);
  }
}
```

### Configuración en app.config.ts

```typescript
import { taskProviders } from "@infrastructure/di/task.config";

export const appConfig: ApplicationConfig = {
  providers: [
    // ... otros providers
    ...taskProviders,
  ],
};
```

## Características

- ✅ Arquitectura hexagonal completa
- ✅ Gestión de estado con Elf
- ✅ Inyección de dependencias configurada
- ✅ Casos de uso reutilizables
- ✅ Documentación completa
- ✅ Docstrings en todas las funciones
