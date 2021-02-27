import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Cat } from './cat.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>,
  ) {}

  async findAll(): Promise<Cat[] | null> {
    return await this.catModel.find().exec();
  }

  async create(createPostDto: Cat): Promise<Cat> {
    const createdPost = new this.catModel(createPostDto);
    return await createdPost.save();
  }
  async findOne(id: string): Promise<any> {
    return await this.catModel.findById(id);
  }
  async remove(id: string): Promise<any> {
    return await this.catModel.deleteOne({ _id: id });
  }
}
