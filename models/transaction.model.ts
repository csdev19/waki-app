import { Prisma, Transaction } from '@prisma/client';

export interface TransactionModel extends Transaction {}

const TransactionsMainPanel = Prisma.validator<Prisma.TransactionDefaultArgs>()({
  include: {
    user: {
      select: { name: true, email: true, id: true },
    },
    currency: {
      select: { name: true, id: true, symbol: true, code: true },
    },
  },
});

export type TransactionMainPanel = Prisma.TransactionGetPayload<typeof TransactionsMainPanel>;
