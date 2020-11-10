import { makeSchema, objectType, stringArg } from '@nexus/schema'
import { PrismaClient } from '@prisma/client'
import { User } from './model'
import path from 'path'

const prisma = new PrismaClient()

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: (_, args) => {
        return prisma.user.findMany()
      }
    })

    t.field('user', {
      type: 'User',
      args: {
        id: stringArg({ nullable: false })
      },
      resolve: (_, args) => {
        const { id } = args
        return prisma.user.findOne({
          where: { id }
        })
      }
    })
  }
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'User',
      args: {
        id: stringArg({ nullable: false }),
        email: stringArg({ nullable: false }),
        name: stringArg()
      },
      resolve: (_, args) => {
        const { id, email, name } = args
        return prisma.user.create({
          data: {
            id,
            email,
            name
          }
        })
      }
    })
  }
})

export const schema = makeSchema({
  types: [
    Query,
    Mutation,
    User
  ],
  outputs: {
    typegen: path.join(process.cwd(), 'src', 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'src', 'generated', 'schema.graphql')
  }
})