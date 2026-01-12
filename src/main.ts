import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS so the frontend can communicate with this API
  app.enableCors();

  // --- Swagger Configuration ---
  const config = new DocumentBuilder()
    .setTitle('Health Tech Task Management API')
    .setDescription('API documentation for the Simple Task Management System')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // Swagger UI will be available at http://localhost:3333/api/docs
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3333);
  console.log(`Application is running on: http://localhost:3333`);
  console.log(`Swagger Docs available at: http://localhost:3333/api/docs`);
}
bootstrap();