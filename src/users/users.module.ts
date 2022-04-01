import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { mongo } from '../config/mongo';
import { LoggerModel } from '../logs/entity/logs.entity';
import { LogsService } from '../logs/logs.service';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(mongo),
    MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
  ],
  providers: [UsersService, LogsService],
  controllers: [UsersController],
})
export class UsersModule {}
