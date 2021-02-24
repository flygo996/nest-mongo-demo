import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
  ],
})
export class DbModule {}
