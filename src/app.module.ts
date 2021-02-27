import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatsModule } from './cats/cats.module';
import { UploadsModule } from './uploads/uploads.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    CatsModule,
    UploadsModule,
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
