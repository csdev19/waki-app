import { PrismaClient } from '@prisma/client';
import { TransactionMainPanel } from 'src/models/transaction.model';

export interface ITransactionRepository {
  getTransactionsByUserId(userId: number): Promise<TransactionMainPanel[]>;
}

export class TransactionRepository implements ITransactionRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async getTransactionsByUserId(userId: number): Promise<TransactionMainPanel[]> {
    const transactions = await this.prismaClient.transaction.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
        currency: {
          select: {
            name: true,
            id: true,
            symbol: true,
            code: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return transactions;
  }
}
