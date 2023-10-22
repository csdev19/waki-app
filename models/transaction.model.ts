import { Prisma, Transaction } from '@prisma/client';

export interface TransactionModel extends Transaction {}

const TransactionsWithUsers = Prisma.validator<Prisma.TransactionDefaultArgs>()({
  include: {
    user: {
      select: { name: true, email: true, id: true },
    },
  },
});

export type TransactionWithUsers = Prisma.TransactionGetPayload<typeof TransactionsWithUsers>;
