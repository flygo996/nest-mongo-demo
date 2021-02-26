import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
// 封装错误返回
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// dto 数据验证错误处理
import { ValidationPipe } from './common/pipes/validate.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression()); // Compression can greatly decrease the size of the response body, thereby  increasing the speed of a web app.
  app.enableCors();
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor());

  const options = new DocumentBuilder()
    .setTitle('nestjs 博客API')
    .setDescription('我的nestjs博客')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log(`The api-docs is running on: ${await app.getUrl()}/api-docs`);
}
bootstrap();
