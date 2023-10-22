import { TransactionWithUsers } from 'models/transaction.model';
import { ITransactionRepository } from 'repositories/transaction.repository';

export class TransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  public async getTransactionsByUserId(userId: number): Promise<TransactionWithUsers[]> {
    const transactions: TransactionWithUsers[] =
      await this.transactionRepository.getTransactionsByUserId(userId);
    return transactions;
  }
}
