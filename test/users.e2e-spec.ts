import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '../src/users/users.module';
import { mongo } from '../src/config/mongo';
import { LoggerModel } from '../src/logs/entity/logs.entity';

describe('UserController (e2e)', () => {
  let users: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(5000);

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        MongooseModule.forRoot(mongo),
        MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
      ],
    }).compile();

    users = moduleFixture.createNestApplication();
    await users.init();
  });

  it('/ (GET)', () => {
    return request(users.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
