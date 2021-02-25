import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression()); // Compression can greatly decrease the size of the response body, thereby increasing the speed of a web app.

  const options = new DocumentBuilder()
    .setTitle('nestjs 博客API')
    .setDescription('我的nestjs博客')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000');
  console.log('http://localhost:3000/api-docs');
}
bootstrap();
