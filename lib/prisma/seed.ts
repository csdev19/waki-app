import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const currencies = await prisma.currency.createMany({
    data: [
      {
        code: 'USD',
        name: 'United States Dollar',
        symbol: '$',
        exchangeRate: 1,
        source: 'MANUAL',
      },
      {
        code: 'PEN',
        name: 'Peruvian Sol',
        symbol: 'S/',
        exchangeRate: 3.83,
        source: 'MANUAL',
      }
    ]
  });
  const currencySoles = await prisma.currency.findFirst({
    where: {
      code: 'PEN'
    }
  });
  const currencyDollars = await prisma.currency.findFirst({
    where: {
      code: 'USD'
    }
  });

  console.log('currencies -> ', currencies);
  const users = await prisma.user.createMany({
    data: [
      {
        email: 'cristian@example.com',
        name: 'Cristian Sotomayor',
        role: 'ADMIN',
      },
      {
        email: 'cristian2@example.com',
        name: 'Cristian Sotomayor 2',
        role: 'USER',
      }
    ]
  });

  console.log('users -> ', users);

  const userAdmin = await prisma.user.findFirst({
    where: {
      email: 'cristian@example.com'
    }
  });

  const transactions = await prisma.transaction.createMany({
    data: [
      {
        amount: 100.22,
        title: 'example soles 0',
        description: 'loremp ipsum',
        date: new Date(2021, 1, 14),
        type: 'INCOME',
        userId: userAdmin.id,
        currencyId: currencySoles.id,
      },
      {
        amount: 57.22,
        title: 'example soles 1',
        description: 'loremp ipsum',
        date: new Date(2023, 10, 27),
        type: 'EXPENSE',
        userId: userAdmin.id,
        currencyId: currencySoles.id,
      },
      {
        amount: 1.20,
        title: 'example soles 2',
        description: 'loremp ipsum',
        date: new Date(2023, 10, 2),
        type: 'INCOME',
        userId: userAdmin.id,
        currencyId: currencySoles.id,
      },
      {
        amount: 1003,
        title: 'example soles 3',
        description: 'loremp ipsum',
        date: new Date(2021, 2, 9),
        type: 'EXPENSE',
        userId: userAdmin.id,
        currencyId: currencySoles.id,
      },
      {
        amount: 100.22,
        title: 'example dollars 0',
        description: 'loremp ipsum',
        date: new Date(2023, 8, 29),
        type: 'INCOME',
        userId: userAdmin.id,
        currencyId: currencyDollars.id,
      },
      {
        amount: 57.22,
        title: 'example dollars 1',
        description: 'loremp ipsum',
        date: new Date(),
        type: 'EXPENSE',
        userId: userAdmin.id,
        currencyId: currencyDollars.id,
      },
      {
        amount: 100.22,
        title: 'example dollars 2',
        description: 'loremp ipsum',
        // date 09/09/2023
        date: new Date(2023, 9, 9),
        type: 'INCOME',
        userId: userAdmin.id,
        currencyId: currencyDollars.id,
      },
      {
        amount: 57.22,
        title: 'example dollars 3',
        description: 'loremp ipsum',
        date: new Date(2023, 10, 9),
        type: 'EXPENSE',
        userId: userAdmin.id,
        currencyId: currencyDollars.id,
      },

    ]
  });
  console.log('transactions', transactions);
}

main()
  .then(async () => {
    console.log('Successfully seeded db!!! 🚀🚀')
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  })