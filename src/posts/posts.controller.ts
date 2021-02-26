import {
  Controller,
  Get,
  Post as POST,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@ApiTags('帖子')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '帖子列表', description: '帖子列表2' })
  async findAll(): Promise<Post[] | null> {
    return await this.postsService.findAll();
  }

  @POST()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() Post: Post): Promise<Post> {
    return await this.postsService.create(Post);
  }
  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() body: Post) {
    console.log(id, body);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    return await this.postsService.remove(id);
  }
}
