import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('帖子')
class CreatePostDto {
  @ApiProperty({
    title: 'title',
  })
  title: string;

  @ApiProperty({
    title: 'content',
  })
  content: string;
}

@Controller('posts')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '帖子列表' })
  index() {
    return [
      {
        id: '111',
        title: '帖子1',
        content: 'aaaa',
      },
      {
        id: '2222',
        title: '帖子2',
        content: 'bbbb',
      },
    ];
  }
  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDto) {
    return body;
  }
  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  details(@Param('id') id: string) {
    return {
      id: id,
      title: '帖子2',
      content: 'bbbb',
    };
  }
  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    console.log(id, body);
    return {
      success: true,
    };
  }
  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param() id: string) {
    console.log(id);
    return {
      success: true,
    };
  }
}
