import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { mongo } from '../../config/mongo';
import { LoggerModel } from '../entity/logs.entity';
import { LogsService } from '../logs.service';

describe('LogsService', () => {
  let service: LogsService;

  beforeEach(async () => {
    jest.setTimeout(5000);

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(mongo),
        MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
      ],
      providers: [LogsService],
    }).compile();

    service = module.get<LogsService>(LogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
