import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { hashSync } from 'bcryptjs';
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
  @prop({
    get(val: string) {
      return val;
    },
    set(val: string) {
      return val ? hashSync(val) : val;
    },
  })
  @IsString()
  password: string;
}
