import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Post {
  @ApiProperty({
    title: '博客标题',
  })
  @prop({
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    title: '博客内容',
  })
  @prop({
    required: true,
  })
  @IsString()
  content: string;
}
