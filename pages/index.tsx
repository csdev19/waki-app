import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import { TransactionMainPanel } from "models/transaction.model"
import { transactionService } from "services"
import Transaction, { TransactionProps } from "components/Transaction";


export const getStaticProps: GetStaticProps = async () => {
  const transactions: TransactionMainPanel[]  = await transactionService.getTransactionsByUserId(3  );
  const mappedTransactions = transactions.map((transaction) => {
    return {
      ...transaction,
      amount: transaction.amount.toNumber(),
      date: transaction.date.toDateString(),
      createdAt: transaction.createdAt.toDateString(),
      updatedAt: transaction.updatedAt.toDateString(),
    }
  });

  return {
    props: { transactions: mappedTransactions },
    revalidate: 10
  }
}

type Props = {
  transactions: TransactionProps[]
}

const Blog: React.FC<Props> = (props) => {
  console.log('props',props);
  return (
    <Layout>
      <main className="page">
        <h1>My transactions</h1>
        <article>
          {props.transactions.map((transaction) => (
            <section key={transaction.id} className="transaction">
              <Transaction transaction={transaction} />
            </section>
          ))}
        </article>
      </main>
      <style jsx>{`
        .transaction {
          background: white;
          transition: box-shadow 0.1s ease-in;
          padding: 2rem;
        }

        .transaction:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .transaction + .transaction {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
