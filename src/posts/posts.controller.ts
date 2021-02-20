import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

class CreatePostDto {
  title: string;
  content: string;
}

@Controller('posts')
export class PostsController {
  @Get()
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
  create(@Body() body: CreatePostDto) {
    return body;
  }
  @Get(':id')
  details(@Param('id') id: string) {
    return {
      id: id,
      title: '帖子2',
      content: 'bbbb',
    };
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    console.log(id, body);
    return {
      success: true,
    };
  }
  @Delete(':id')
  remove(@Param() id: string) {
    console.log(id);
    return {
      success: true,
    };
  }
}
