import PrismaClientInstance from '@lib/prisma';
import { TransactionRepository } from './transaction.repository';

export const transactionRepository = new TransactionRepository(PrismaClientInstance);
