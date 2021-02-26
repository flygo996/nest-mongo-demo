import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  async uploads(file, body) {
    return 'haha';
  }
}
