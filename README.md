# 🌱 AgroConstrucciones Davelo

Sitio web corporativo desarrollado con tecnologías modernas, enfocado en ofrecer una experiencia rápida, segura, responsive y escalable para representar los servicios de AgroConstrucciones Davelo.

El proyecto está diseñado siguiendo buenas prácticas de arquitectura de software, principios SOLID, componentes reutilizables y un Design System propio, permitiendo su crecimiento hacia funcionalidades más avanzadas como panel administrativo, autenticación, gestión de contenido y participación en licitaciones públicas y privadas.

---

# 🚀 Objetivos

- Desarrollar una página web moderna y profesional.
- Garantizar seguridad, mantenibilidad y escalabilidad.
- Implementar una arquitectura modular basada en componentes.
- Aplicar principios de desarrollo Frontend modernos.
- Facilitar futuras integraciones con Backend y APIs.

---

# 🛠 Tecnologías

## Frontend

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Lucide React

## Calidad del código

- ESLint
- Prettier
- Husky
- lint-staged

## Control de versiones

- Git
- GitHub

---

# 📁 Arquitectura del proyecto

```text
AgroConstruccionesDavelo/
│
├── .github/
│   └── workflows/
│
├── backend/
│   └── .gitkeep
│
├── docs/
│   ├── adr/
│   ├── architecture/
│   ├── ui-kit/
│   └── roadmap.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── utils/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
└── README.md
```

---

# ⚙ Requisitos

- Node.js 24 o superior
- npm 11 o superior
- Visual Studio Code

---

# ▶ Instalación

Clonar el repositorio

```bash
git clone https://github.com/USUARIO/AgroConstruccionesDavelo.git
```

Ingresar al Frontend

```bash
cd AgroConstruccionesDavelo/frontend
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

Compilar producción

```bash
npm run build
```

Vista previa

```bash
npm run preview
```

---

# 📜 Scripts disponibles

| Script | Descripción |
|---------|-------------|
| npm run dev | Ejecuta el servidor de desarrollo |
| npm run build | Genera la versión de producción |
| npm run preview | Visualiza la versión compilada |
| npm run lint | Ejecuta ESLint |

---

# 🎨 Design System

El proyecto implementa un sistema de diseño propio basado en Tailwind CSS v4.

Principios:

- Componentes reutilizables.
- Tokens de diseño.
- Responsive Design.
- Accesibilidad.
- Consistencia visual.
- Código limpio.

---

# 📱 Responsive Design

El sitio está diseñado bajo la estrategia **Mobile First**, adaptándose a:

- Teléfonos móviles
- Tablets
- Portátiles
- Monitores de escritorio
- Pantallas de alta resolución

---

# 🔒 Seguridad

Desde el inicio del proyecto se contemplan los tres pilares de la seguridad de la información:

- Disponibilidad
- Integridad
- Confidencialidad

Además se siguen buenas prácticas para minimizar vulnerabilidades comunes.

---

# 📚 Documentación

La carpeta `docs/` contiene:

- Arquitectura del sistema.
- Decisiones de diseño (ADR).
- Guía del Design System.
- Roadmap del proyecto.

---

# 🌿 Flujo de trabajo Git

Modelo de ramas:

```text
main
│
└── develop
      │
      ├── feature/design-system
      ├── feature/home
      ├── feature/about
      ├── feature/services
      ├── feature/contact
      └── feature/admin
```

Se utilizan mensajes de commit siguiendo la convención **Conventional Commits**.

Ejemplos:

```text
feat:
fix:
docs:
refactor:
style:
test:
build:
chore:
```

---

# 📈 Roadmap

## Fase 1

- Infraestructura
- Design System
- Página principal

## Fase 2

- Formulario de contacto
- SEO
- Optimización

## Fase 3

- Backend
- Panel administrativo
- Gestión de contenido

## Fase 4

- Sistema de licitaciones
- Integración con APIs
- Dashboard

---

# 👨‍💻 Autor

Proyecto desarrollado para **AgroConstrucciones Davelo** siguiendo estándares modernos de Ingeniería de Software.

---

# 📄 Licencia

Proyecto privado.
Todos los derechos reservados.