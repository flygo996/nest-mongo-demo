import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class User {
  @ApiProperty()
  @prop()
  @IsString()
  userId: string;

  @ApiProperty()
  @prop()
  @IsString()
  userName: string;

  @ApiProperty()
  @prop()
  @IsString()
  password: string;
}
