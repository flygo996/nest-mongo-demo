import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Post {
  @ApiProperty({
    title: '博客标题',
    description: '博客标题2',
    example: 'Nestjs学习',
  })
  @prop({
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    title: '博客内容',
    description: '博客内容2',
    example: 'Nestjs学习-应该这样学习....',
  })
  @prop({
    required: true,
  })
  @IsString()
  content: string;
}
