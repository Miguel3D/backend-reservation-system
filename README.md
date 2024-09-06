# Backend del Sistema de Reservas

Este proyecto es el backend del Sistema de Reservas, desarrollado con [NestJS](https://nestjs.com/) y Prisma ORM. Proporciona una API para la creación, modificación, cancelación y visualización de reservas, así como la gestión de clientes y servicios.

## Requisitos

- Node.js (versión recomendada: 18.x o superior)
- npm (versión recomendada: 9.x o superior)
- Base de datos PostgreSQL

## Instalación y Configuración

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Miguel3D/backend-reservation-system
   cd backend-reservation-system
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido, ajustando los valores según tu entorno de desarrollo:

   ```bash
   DATABASE_URL="postgresql://postgres:bVXnyVgueeYSbLQLbbBChKBwepJblQRK@autorack.proxy.rlwy.net:35437/railway"
   ```

4. **Configura Prisma**

   Inicializa la base de datos y aplica las migraciones:

   ```bash
   npx prisma migrate dev --name init
   ```

   También puedes generar el cliente de Prisma:

   ```bash
   npx prisma generate
   ```

5. **Inicia el servidor**

   ```bash
   npm run start:dev
   ```

   El servidor debería estar corriendo en `http://localhost:3000`.

## Rutas de la API

- **POST** `/reservations`: Crea una nueva reserva.
- **PUT** `/reservations/:id`: Actualiza una reserva existente.
- **DELETE** `/reservations/:id`: Elimina una reserva.
- **GET** `/reservations`: Obtiene todas las reservas con opciones de filtro.
- **GET** `/reservations/:id`: Obtiene una reserva específica por ID.

- **POST** `/clients`: Crea una nuevo usuario.
- **PUT** `/clients/:id`: Actualiza un usuario existente.
- **DELETE** `/clients/:id`: Elimina un usuario.
- **GET** `/clients`: Obtiene todos los usuario con opciones de filtro.
- **GET** `/clients/:id`: Obtiene un usuario específica por ID.

## Uso de Swagger

Este proyecto utiliza Swagger para la documentación automática de la API. Una vez que el servidor esté en ejecución, puedes acceder a la documentación en `http://localhost:3000/api`.

## Estructura del Proyecto

- **`src/app.module.ts`**: Módulo principal que importa y configura los módulos de la aplicación.
- **`src/prisma/`**: Servicio de Prisma para interactuar con la base de datos.
- **`src/reservations/`**: Módulo que maneja las operaciones CRUD para las reservas.
  - `reservations.controller.ts`: Controlador para gestionar las rutas relacionadas con las reservas.
  - `reservations.service.ts`: Servicio para la lógica de negocio de las reservas.
  - `dto/`: Data Transfer Objects (DTO) para crear y actualizar reservas.
- **`src/clients/`**: Módulo para la gestión de clientes (nombre, apellido, identificación y correo).
- **`src/services/`**: Módulo para la gestión de servicios disponibles para reservas (hoteles, restaurantes, etc.).

## Contacto

Para cualquier pregunta o consulta:

- **Nombre**: Miguel Angel Moreno Rivas
- **Correo Electrónico**: [miguel.amorenori@gmail.com](mailto:miguel.amorenori@gmail.com)
