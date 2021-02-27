import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { Cat } from './cat.model';

@ApiTags('猫')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: '帖子列表', description: '帖子列表2' })
  async findAll(): Promise<Cat[] | null> {
    return await this.catsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() Cat: Cat): Promise<Cat> {
    return await this.catsService.create(Cat);
  }
  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  async findOne(@Param('id') id: string) {
    return await this.catsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() body: Cat) {
    console.log(id, body);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    return await this.catsService.remove(id);
  }
}
