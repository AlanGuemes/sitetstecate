import { db as prisma } from '../lib/db';

async function main() {
  console.log('Seed is disabled as data.ts has been migrated to DB.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
