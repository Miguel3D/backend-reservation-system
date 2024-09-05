import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración detallada de CORS
  const corsOptions: CorsOptions = {
    origin: [
      'http://localhost:8080/',
      'https://frontend-reservation-system.vercel.app/',
    ], // Aquí pones el dominio del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Permitir cookies si es necesario
    allowedHeaders: 'Content-Type, Accept, Authorization', // Agrega los headers permitidos
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
