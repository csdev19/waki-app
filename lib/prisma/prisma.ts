import { PrismaClient } from '@prisma/client';

let PrismaClientInstance: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  PrismaClientInstance = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  PrismaClientInstance = global.prisma;
}

export default PrismaClientInstance;