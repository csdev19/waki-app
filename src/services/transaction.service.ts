import { TransactionMainPanel } from 'models/transaction.model';
import { ITransactionRepository } from 'repositories/transaction.repository';

export class TransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  public async getTransactionsByUserId(userId: number): Promise<TransactionMainPanel[]> {
    const transactions: TransactionMainPanel[] =
      await this.transactionRepository.getTransactionsByUserId(userId);
    return transactions;
  }
}
