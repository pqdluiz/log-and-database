import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { mongo } from '../../config/mongo';
import { LoggerModel } from '../../logs/entity/logs.entity';
import { LogsService } from '../../logs/logs.service';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';

async function sleep(seconds: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

beforeAll(async () => {
  console.log('In beforeAll, starting sleep');
  await sleep(5);
  console.log('beforeAll finally finished sleeping');
});

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
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
