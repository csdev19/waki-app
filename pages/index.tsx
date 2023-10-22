import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import { TransactionWithUsers } from "models/transaction.model"
import { transactionService } from "services"
import Transaction from "components/Transaction";


export const getStaticProps: GetStaticProps = async () => {
  const transactions: TransactionWithUsers[]  = await transactionService.getTransactionsByUserId(1);
  console.log("🚀 ~ file: index.tsx:13 ~ constgetStaticProps:GetStaticProps= ~ transactions:", transactions)
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
  transactions: any[]
}

const Blog: React.FC<Props> = (props) => {
  console.log('props',props);
  return (
    <Layout>
      <div className="page">
        <h1>My transactions</h1>
        <main>
          {props.transactions.map((transaction) => (
            <div key={transaction.id} className="transaction">
              <Transaction transaction={transaction} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .transaction {
          background: white;
          transition: box-shadow 0.1s ease-in;
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
