import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { JwtService } from '@nestjs/jwt';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from './user.model';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async findAll() {
    return await this.userModel.find().exec();
  }
  async register(user: RegisterDto) {
    console.log('user-register:', user);
    const { username, password } = user;
    const obj = await this.userModel.create({
      username,
      password,
    });
    return obj;
  }

  async login(user: LoginDto) {
    console.log('user-login:', user);
    const payload = { username: user.username, sub: user.username };
    return {
      msg: '登录成功',
      success: true,
      token: this.jwtService.sign(payload),
    };
  }
}
