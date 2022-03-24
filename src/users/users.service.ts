import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async get(data: User): Promise<User[]> {
    return await prisma.user.findMany({ where: data });
  }

  async post(data: User): Promise<User> {
    return await prisma.user.create({ data });
  }
}
