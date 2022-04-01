import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';

import { LogsModule } from '../src/logs/logs.module';
import { LoggerModel } from '../src/logs/entity/logs.entity';
import { mongo } from '../src/config/mongo';


describe('LogsService (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(5000);

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        //LogsModule,
        MongooseModule.forRoot(mongo),
        MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /*it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });*/
});
