import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "@lib/prisma/prisma"

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.transaction.findMany({
    where: {},
    include: {
      user: {
        select: { name: true, email: true, id: true },
      },
    },
  });
  const mappedFeed = feed.map((transaction) => {
    return {
      ...transaction,
      amount: transaction.amount.toNumber(),
      date: transaction.date.toDateString(),
    }
  });

  // const feed = [
  //   {
  //     id: "1",
  //     title: "Prisma is the perfect ORM for Next.js",
  //     content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
  //     published: false,
  //     author: {
  //       name: "Nikolas Burk",
  //       email: "burk@prisma.io",
  //     },
  //   },
  // ]
  return { 
    props: { feed: mappedFeed }, 
    revalidate: 10 
  }
}

type Props = {
  feed: any[]
}

const Blog: React.FC<Props> = (props) => {
  console.log('props',props);
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {/* {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))} */}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
