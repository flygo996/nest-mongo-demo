import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [TypegooseModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
