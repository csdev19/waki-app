# Prisma documentation of this project

## Overview

__This document it's going to contain the documentation of the Prisma part of this project. Anything related to prisma and how I used it in this project will be documented here.__

## Initial doubts

- It's possible to use Prisma with PostgreSQL? **YES**
- It's possible to use enums or types in Prisma? **YES**
- It's possible to use Prisma with Next.js? **YES**
- It's possible to work with decimal numbers in Prisma? **YES** [link](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields#working-with-decimal)
- From my local machine it's possible to push the changes to the database? **YES** 
  ```
  npx prisma db push
  # or
  yarn db:push
  ```
- It's possible to see the data and the tables ? **YES**, and also we can see that from our local machine.
  ```
  npx prisma studio
  # or
  yarn studio
  ```
- It's possible to create migrations with Prisma and apply them?
- It's possible to share a local version of the database run the migrations and work locally?

## Development

The following URL is the initial resource that I used to create this project:

https://vercel.com/guides/nextjs-prisma-postgres#step-3-setup-prisma-and-create-the-database-schema

I find enums very useful in this project but I'm not sure how to used them and how it's going to work on the database side. I'm going to use the following URL to learn more about enums. [link](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-enums)


