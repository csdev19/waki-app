import { transactionRepository } from 'repositories';
import { TransactionService } from './transaction.service';

export const transactionService = new TransactionService(transactionRepository);
