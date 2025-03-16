import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // Configuración global de pipes para validación
 app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}));

// Configuración de Swagger
const config = new DocumentBuilder()
  .setTitle('Movies API')
  .setDescription('API para gestión de películas y usuarios')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3000);
}
bootstrap();
