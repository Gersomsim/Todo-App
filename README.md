# 📋 Todo App

Una aplicación moderna de gestión de tareas construida con Angular, implementando **Arquitectura Hexagonal** y **Diseño Atómico** para una experiencia de usuario excepcional.

![Todo App](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Características Principales

- ✅ **Gestión completa de tareas** con prioridades y categorías
- 🌙 **Modo oscuro/claro** con transiciones suaves
- 📱 **Diseño completamente responsivo**
- 🔍 **Búsqueda y filtrado avanzado**
- 📊 **Estadísticas en tiempo real**
- ⚡ **Interfaz moderna y rápida**
- 🎨 **Diseño atómico** para máxima reutilización
- 🏗️ **Arquitectura hexagonal** para escalabilidad

## 🏗️ Arquitectura del Proyecto

### Arquitectura Hexagonal (Ports & Adapters)

```
src/app/
├── core/                  # 🎯 Núcleo de la aplicación
│   ├── application/       # Aplicacion
│   │   └── use-cases/     # Casos de usos
│   └── domain/            # Dominio de negocio
│       ├── models/        # Entidades y modelos
│       └── repositories/  # Repositorios
├── infrastructure/        # 🏗️ Infraestructura de la aplicación
│   ├── adapters/          # Adapters
│   ├── di/                # Inversion de dependencias
│   │   └── tokens/        # Tokens
│   ├── http/              # Servicio para peticiones http
│   ├── libraries/         # Librerias de terceros
│   ├── repositories/      # Repositorios
│   └── state/             # Contro de estado de aplicacion
│       ├── facade/        # Facades
│       └── store/         # Estados
├── ui/                    # 🧩 Componentes reutilizables
│   ├── atoms/             # Componentes atómicos
│   ├── molecules/         # Componentes moleculares
│   └── organism/          # Componentes orgánicos
├── layout/                # 🎨 Layouts de la aplicación
├── pages/                 # 📄 Páginas principales
└── shared/                # 🔧 Utilidades compartidas
```

### Diseño Atómico

#### 🧬 **Atoms** (Átomos)

- Botones, inputs, labels, íconos
- Componentes básicos e indivisibles

#### 🧪 **Molecules** (Moléculas)

- Formularios, tarjetas, navegación
- Combinaciones de átomos con funcionalidad específica

#### 🦠 **Organisms** (Organismos)

- Headers, footers, sidebars, listas complejas
- Secciones completas de la interfaz

## 🚀 Tecnologías Utilizadas

### Frontend

- **Angular 18** - Framework principal
- **TypeScript 5.5** - Lenguaje de programación
- **Tailwind CSS 4.1** - Framework de estilos
- **Angular CLI** - Herramientas de desarrollo

### Arquitectura

- **Arquitectura Hexagonal** - Separación de responsabilidades
- **Diseño Atómico** - Metodología de diseño de componentes
- **Component-Based Architecture** - Arquitectura basada en componentes

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Gersomsim/Todo-App.git
cd Todo-App
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
ng serve
```

4. **Abrir en el navegador**

```
http://localhost:4200
```

### Scripts Disponibles

```bash
# Desarrollo
npm start              # ng serve
npm run build          # ng build
npm run test           # ng test
npm run lint           # ng lint

# Producción
npm run build:prod     # ng build --configuration production
```

## 🎨 Características de Diseño

### Modo Oscuro/Claro

- Transiciones suaves entre modos
- Persistencia de preferencias del usuario
- Colores optimizados para ambos temas

### Responsividad

- **Mobile First** - Diseño optimizado para móviles
- **Breakpoints** - Adaptación a tablets y desktop
- **Flexible Layout** - Grid system responsive

### Componentes Reutilizables

- **Atoms**: Botones, inputs, badges, íconos
- **Molecules**: Cards, forms, navigation items
- **Organisms**: Headers, sidebars, task lists

## 📊 Funcionalidades

### Gestión de Tareas

- ✅ Crear, editar, eliminar tareas
- 🏷️ Categorización por proyectos
- ⚡ Prioridades (Alta, Media, Baja)
- 📅 Fechas de vencimiento
- 🔄 Estados (Pendiente, En progreso, Completada)

### Búsqueda y Filtrado

- 🔍 Búsqueda en tiempo real
- 🏷️ Filtros por categoría
- ⚡ Filtros por prioridad
- 📅 Filtros por fecha
- 🔄 Ordenamiento personalizable

### Estadísticas

- 📈 Progreso general
- ✅ Tareas completadas
- ⏳ Tareas pendientes
- 📊 Productividad diaria

## 🏗️ Arquitectura Hexagonal

### Capas de la Aplicación

#### **Domain Layer** (Capa de Dominio)

```typescript
// src/app/core/domain/models/task.model.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  category: Category;
  dueDate: Date;
  completed: boolean;
  createdAt: Date;
}
```

#### **Application Layer** (Capa de Aplicación)

- Casos de uso

#### **Infrastructure Layer** (Capa de Infraestructura)

- APIs externas
- Estado de la aplicacion
- Librerias de terceros

#### **Presentation Layer** (Capa de Presentación)

- Componentes Angular
- Templates
- Estilos

## 🧩 Diseño Atómico

### Jerarquía de Componentes

```
Atoms (Átomos)
├── Button
├── Input
├── Badge
└── Icon

Molecules (Moléculas)
├── TaskCard
├── SearchBar
├── FilterGroup
└── StatsCard

Organisms (Organismos)
├── Header
├── Sidebar
├── TaskList
└── Footer
```

### Beneficios del Diseño Atómico

- **Reutilización** - Componentes modulares
- **Consistencia** - Diseño uniforme
- **Mantenibilidad** - Fácil actualización
- **Escalabilidad** - Crecimiento organizado

## 🚀 Despliegue

### Build de Producción

```bash
npm run build:prod
```

### Despliegue en Vercel

```bash
npm install -g vercel
vercel --prod
```

### Despliegue en Netlify

```bash
npm run build:prod
# Subir carpeta dist/ a Netlify
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commits

```
✨ feat: nueva funcionalidad
🐛 fix: corrección de bug
📝 docs: documentación
🎨 style: cambios de estilo
♻️ refactor: refactorización
⚡ perf: mejoras de rendimiento
✅ test: pruebas
🔧 chore: tareas de mantenimiento
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **Gersom Hernandez** - _Desarrollo inicial_ - [TuUsuario](https://github.com/Gersomsim)

## 🙏 Agradecimientos

- Angular Team por el excelente framework
- Tailwind CSS por el sistema de diseño
- Comunidad de desarrolladores por las mejores prácticas

---

⭐ **¡Dale una estrella si te gustó el proyecto!**
