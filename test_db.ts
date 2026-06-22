import { PrismaClient } from '@prisma/client'; 
const prisma = new PrismaClient(); 
async function main() { 
  const deps = await prisma.dependencia.findMany(); 
  console.log('count:', deps.length); 
} 
main();
