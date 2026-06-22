import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient | undefined
}

let dbInstance: PrismaClient
const connectionString = process.env.DATABASE_URL || ""

if (connectionString.startsWith("prisma+postgres://")) {
  if (process.env.NODE_ENV === "production") {
    dbInstance = new PrismaClient({
      accelerateUrl: connectionString
    })
  } else {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient({
        accelerateUrl: connectionString
      })
    }
    dbInstance = globalForPrisma.prisma
  }
} else {
  if (process.env.NODE_ENV === "production") {
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    dbInstance = new PrismaClient({ adapter })
  } else {
    if (!globalForPrisma.prisma) {
      const pool = new Pool({ connectionString })
      const adapter = new PrismaPg(pool)
      globalForPrisma.prisma = new PrismaClient({ adapter })
    }
    dbInstance = globalForPrisma.prisma
  }
}

export const db = dbInstance
