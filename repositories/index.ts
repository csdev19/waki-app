import { TransactionRepository } from './transaction.repository';
import PrismaClientInstance from '@lib/prisma';

export const transactionRepository = new TransactionRepository(PrismaClientInstance);
