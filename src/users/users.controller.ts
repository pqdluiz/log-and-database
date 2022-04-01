import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { LogsStatus } from 'src/logs/enum/logs.enum';

import { LogsService } from '../logs/logs.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly loggerService: LogsService,
  ) {}

  @Get('/')
  getUser(@Body() data: User): Promise<User[]> {
    this.loggerService.log({
      data: data,
      operation: LogsStatus.GET_USER,
      create_At: new Date(),
    });
    return this.userService.get(data);
  }

  @Post('/')
  postUser(@Body() data: User): Promise<User> {
    this.loggerService.log({
      data: data,
      operation: LogsStatus.POST_USER,
      create_At: new Date(),
    });
    return this.userService.post(data);
  }
}
