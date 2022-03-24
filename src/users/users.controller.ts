import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from "@prisma/client";

import { LogsService } from '../logs/logs.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly loggerService: LogsService,
  ) {}

  @Get()
  getUser(@Body() data: User): Promise<User[]> {
    const { name, email } = data;

    this.loggerService.log({
      name: name,
      email: email,
      operation: 'get_users',
    });
    return this.userService.get(data);
  }

  @Post()
  postUser(@Body() data: User): Promise<User> {
    const { name, email } = data;

    this.loggerService.log({
      name: name,
      email: email,
      operation: 'post_users',
    });
    return this.userService.post(data);
  }
}
