import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Reservation System')
    .setDescription('API documentation for the reservation system')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'Local environment')
    .addServer(
      'https://backend-reservation-system-production.up.railway.app/',
      'Production',
    )

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
