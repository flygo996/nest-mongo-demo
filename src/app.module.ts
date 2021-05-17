import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatsModule } from './cats/cats.module';
import { UploadsModule } from './uploads/uploads.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),

    CatsModule,
    UploadsModule,
    AuthModule,
    CommonModule,
    ChatModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
