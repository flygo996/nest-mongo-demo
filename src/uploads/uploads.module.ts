import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import dayjs = require('dayjs');
import * as nuid from 'nuid';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // 配置文件上传后的文件夹路径
        destination: `./public/uploads/${dayjs().format('YYYY-MM-DD')}`,
        filename: (req, file, cb) => {
          const filename = `${nuid.next()}.${file.originalname}`;
          console.log(file);
          return cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
