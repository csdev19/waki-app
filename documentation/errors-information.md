# Errors information

## Error staticProps with prisma decimals

Here is the link about the error: https://github.com/prisma/prisma/issues/9170

The error it was because I didn't parse the information that I get from prisma. In this case data like `Decimals` and `Date` this data needs to be parsed before I send it to the client.

```tsx
  const feed = await prisma.transaction.findMany({
    where: {},
    include: {
      user: {
        select: { name: true, email: true, id: true },
      },
    },
  });
  // We need to add and extra step to parse the data. Maybe a Mapper layer   
  const mappedFeed = feed.map((transaction) => {
    return {
      ...transaction,
      amount: transaction.amount.toNumber(),
      date: transaction.date.toDateString(),
    }
  });

  return { 
    props: { feed: mappedFeed }, 
    revalidate: 10 
  }

```