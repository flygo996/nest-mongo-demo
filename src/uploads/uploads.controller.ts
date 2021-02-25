import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import {
  FileInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
  AnyFilesInterceptor,
} from '@nestjs/platform-express';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('文件上传')
@Controller('uploads')
export class UploadsController {
  @Post('file')
  @ApiOperation({ summary: '上传单个文件' })
  @UseInterceptors(FileInterceptor('file')) // file对应HTML表单的name属性
  UploadedFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log(body);
    console.log(file);
    // const writeImage = createWriteStream(
    //   join(__dirname, '..', 'upload', `${file.originalname}`),
    // );
    // writeImage.write(file.buffer);
    return {
      body,
      file,
    };
  }

  @Post('files')
  @ApiOperation({ summary: '上传文件数组，名字都相同' })
  @UseInterceptors(FilesInterceptor('files')) // file对应HTML表单的name属性
  UploadedFiles(@UploadedFiles() files: Express.Multer.File, @Body() body) {
    console.log(body);
    console.log(files);
    // const writeImage = createWriteStream(
    //   join(__dirname, '..', 'upload', `${file.originalname}`),
    // );
    // writeImage.write(file.buffer);
    return {
      body,
      files,
    };
  }

  @Post('multiFiles')
  @ApiOperation({ summary: '上传多个字段的文件' })
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'avatar',
        maxCount: 1,
      },
      {
        name: 'background',
        maxCount: 1,
      },
    ]),
  ) // file对应HTML表单的name属性
  UploadedMultiFiles(
    @UploadedFiles() files: Express.Multer.File,
    @Body() body,
  ) {
    console.log(body);
    console.log(files);
    // const writeImage = createWriteStream(
    //   join(__dirname, '..', 'upload', `${file.originalname}`),
    // );
    // writeImage.write(file.buffer);
    return {
      body,
      files,
    };
  }

  @Post('anyFiles')
  @ApiOperation({ summary: '上传任意文件，跟multiFiles类似' })
  @UseInterceptors(AnyFilesInterceptor()) // file对应HTML表单的name属性
  UploadedAnyFiles(@UploadedFiles() files: Express.Multer.File, @Body() body) {
    console.log(body);
    console.log(files);
    // const writeImage = createWriteStream(
    //   join(__dirname, '..', 'upload', `${file.originalname}`),
    // );
    // writeImage.write(file.buffer);
    return {
      body,
      files,
    };
  }
}
