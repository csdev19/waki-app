import { FunctionComponent } from "react";

export type TransactionProps = {
  id: string;
  title: string;
  amount: number;
  date: string;
}

const Transaction: FunctionComponent<{ transaction: TransactionProps }> = ({ transaction }) => {
  return (
    <div>
      <h2>{transaction.title}</h2>
      <p>Amount: {transaction.amount}</p>
      <small>Date: {transaction.date}</small>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  )
};

export default Transaction;