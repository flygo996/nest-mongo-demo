import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [PostsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
