import { PrismaClient } from '@prisma/client'

import { type User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

const prisma = new PrismaClient()

export class PostgresUserRepository implements UserRepository {
  async getAll (): Promise<User[]> {
    return prisma.user.findMany()
  }

  async save (user: User): Promise<User> {
    return prisma.user.create({
      data: {
        id: user.id,
        firebase_uid: user.firebase_uid,
        user_type_id: user.user_type_id,
        specialty_id: user.specialty_id ?? null,
        schedule_id: user.schedule_id ?? null,
        full_name: user.full_name,
        phone: user.phone
      }
    })
  }

  async getById (id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id }
    })
  }

  async getByFirebaseUid (uid: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { firebase_uid: uid }
    })
  }

  async update (user: User): Promise<User> {
    return prisma.user.update({
      where: { id: user.id },
      data: {
        firebase_uid: user.firebase_uid,
        user_type_id: user.user_type_id,
        specialty_id: user.specialty_id ?? null,
        schedule_id: user.schedule_id ?? null,
        full_name: user.full_name,
        phone: user.phone
      }
    })
  }

  async delete (id: string): Promise<void> {
    prisma.user.delete({
      where: { id }
    })
  }
}
