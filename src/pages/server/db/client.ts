import { PrismaClient } from '@prisma/client'

const primsa = new PrismaClient({
  log: ['query'],
})

export default primsa
