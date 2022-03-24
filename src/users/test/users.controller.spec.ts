import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import mongoose from 'mongoose';

import { mongo } from '../../config/mongo';
import { LoggerModel } from '../../logs/entity/logs.entity';
import { LogsService } from '../../logs/logs.service';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    jest.setTimeout(5000);

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(mongo),
        MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
      ],
      controllers: [UsersController],
      providers: [UsersService, LogsService],
    }).compile();



    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
