import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post } from './post.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postModel: ReturnModelType<typeof Post>,
  ) {}

  async findAll(): Promise<Post[] | null> {
    return await this.postModel.find().exec();
  }

  async create(createPostDto: Post): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }
  async findOne(id: string): Promise<Post> {
    return await this.postModel.findOne({
      id,
    });
  }
}
