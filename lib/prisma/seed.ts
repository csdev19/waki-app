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
        title: 'example 1',
        description: 'loremp ipsum',
        date: new Date(),
        type: 'INCOME',
        userId: userAdmin.id,
        currencyId: currencySoles.id,
      },
      {
        amount: 57.22,
        title: 'example 2',
        description: 'loremp ipsum',
        date: new Date(),
        type: 'EXPENSE',
        userId: userAdmin.id,
        currencyId: currencySoles.id,
      }
    ]
  });
  console.log('transactions', transactions);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  })