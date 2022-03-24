import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Logger } from './logs.interface';

@Injectable()
export class LogsService {
  constructor(@InjectModel('Logger') private readonly logger: Model<Logger>) {}

  log(data: Logger) {
    const { email, name, operation } = data;
    return this.logger.create({ email, name, operation });
  }
}
