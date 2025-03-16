# MovieHub 🎬

MovieHub es una aplicación backend desarrollada con NestJS que permite gestionar información relacionada con películas, usuarios y más. Esta aplicación utiliza TypeORM para la gestión de la base de datos y está diseñada para ser escalable y fácil de mantener.

---

## Características principales ✨

- **Gestión de películas**: Registro, actualización y eliminación de películas.
- **Autenticación de usuarios**: Registro y login de usuarios con bcrypt para la seguridad de las contraseñas.
- **Documentación API**: Integración con Swagger para documentar y probar los endpoints.
- **Base de datos**: Configuración con PostgreSQL y TypeORM para la persistencia de datos.
- **Variables de entorno**: Uso de `dotenv` para gestionar configuraciones sensibles.
- **Testing**: Pruebas unitarias y end-to-end con Jest.

## Base de Datos 🗄️

### Modelo Relacional
El modelo relacional de la base de datos se encuentra en la carpeta `document` como un archivo PDF o imagen. También puedes generarlo a partir de las entidades de TypeORM.

### Script SQL
El script SQL para crear la base de datos se encuentra en la carpeta `document` con el nombre `bd_MoviesHub.sql`. Puedes ejecutarlo directamente en PostgreSQL para configurar la base de datos.

- **Ubicación del script SQL**:
document/bd_MoviesHub

---

## Tecnologías utilizadas 🛠️

- **NestJS**: Framework backend para Node.js.
- **TypeORM**: ORM para la gestión de la base de datos.
- **PostgreSQL**: Base de datos relacional.
- **Swagger**: Documentación de la API.
- **Jest**: Pruebas unitarias y end-to-end.
- **Prettier y ESLint**: Formato y linting del código.

---

## Requisitos previos 📋

- Node.js (v18 o superior)
- npm o yarn
- PostgreSQL
- TypeScript

---

## Instalación 🚀

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/moviehub.git
   cd moviehub

## Ejecución ▶️
Modo desarrollo:
npm run start:dev

Modo producción:
npm run build
npm run start:prod
Documentación API:
Una vez que el servidor esté en ejecución, visita:
http://localhost:3000/api

## coleccion de Postman 
ubicacion: document/moviehub.json
-Instrucciones para importar la colección en Postman:
-Abre Postman.
-Haz clic en Import en la esquina superior izquierda.
-Selecciona Upload Files y elige el archivo moviehub-postman-collection.json desde la carpeta document.

Una vez importada, la colección estará lista para ser utilizada.

## Estructura del proyecto

   moviehub/
├── src/
│   ├── modules/          # Módulos de la aplicación
│   ├── entities/         # Entidades de TypeORM
│   ├── migrations/       # Migraciones de la base de datos
│   ├── main.ts           # Punto de entrada de la aplicación
├── test/                 # Pruebas end-to-end
├── .env.example          # Ejemplo de variables de entorno
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo