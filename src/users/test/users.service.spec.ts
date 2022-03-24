import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { mongo } from '../../config/mongo';
import { LoggerModel } from '../../logs/entity/logs.entity';
import { UsersService } from '../users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    jest.setTimeout(5000);

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(mongo),
        MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
