import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { JwtService } from '@nestjs/jwt';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(userName, password) {
    console.log(userName, password);
    return {
      msg: '注册成功',
      success: true,
      data: {
        userName,
        password,
      },
    };
  }

  async login(user: any) {
    console.log('user', user);
    const payload = { username: user.username, sub: user.userId };
    return {
      msg: '登录成功',
      success: true,
      token: this.jwtService.sign(payload),
    };
  }
}
