import { PrismaClient } from '@prisma/client';
import { TransactionWithUsers } from 'models/transaction.model';

export interface ITransactionRepository {
  getTransactionsByUserId(userId: number): Promise<TransactionWithUsers[]>;
}

export class TransactionRepository implements ITransactionRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async getTransactionsByUserId(userId: number): Promise<TransactionWithUsers[]> {
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
