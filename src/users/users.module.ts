import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongo } from 'src/config/mongo';
import { LoggerModel } from 'src/logs/entity/logs.entity';
import { LogsService } from 'src/logs/logs.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forRoot(mongo),
    MongooseModule.forFeature([{ name: 'Logger', schema: LoggerModel }]),
  ],
  providers: [UsersService, LogsService],
  controllers: [UsersController],
})
export class UsersModule {}
