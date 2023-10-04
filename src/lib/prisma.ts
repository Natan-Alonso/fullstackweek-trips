import { PrismaClient } from '@prisma/client'

const globalFormPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalFormPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

// eslint-disable-next-line no-unused-expressions
if (process.env.NODE_ENV !== 'production') globalFormPrisma.prisma
