import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async findAll(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }
  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({
      username,
    });
  }
}
