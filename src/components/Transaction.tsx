import { $Enums } from '@prisma/client';
import { FunctionComponent } from "react";

export type TransactionProps = {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: $Enums.TransactionType;
  currency: {
    id: string;
    name: string;
    symbol: string;
  }
}
const Transaction: FunctionComponent<{ transaction: TransactionProps }> = ({ transaction }) => {
  return (
    <>
      <header>
        <h2>{transaction.title}</h2>
      </header>
      <p>Amount: {transaction.currency.symbol} {transaction.amount}</p>
      <p>Type: {transaction.type}</p>
      <footer>
        <small>Date: {transaction.date}</small>
      </footer>
      <style jsx>{`
      `}</style>
    </>
  )
};

export default Transaction;