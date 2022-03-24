import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async get(data) {
    return await prisma.user.findMany(data);
  }

  async post(data) {
    return await prisma.user.create({ where: data });
  }
}
