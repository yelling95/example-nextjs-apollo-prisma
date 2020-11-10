import { objectType } from '@nexus/schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('uuid')
    t.string('id')
    t.string('email')
    t.string('name')
  }
})
