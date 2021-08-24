import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin (request: Request, response: Response, next: NextFunction) {
  const { userId } = request

  const usersRepositories = getCustomRepository(UsersRepositories)

  const { admin } = await usersRepositories.findOne(userId)

  if (admin) {
    return next()
  }

  return response.status(401).json({ error: 'Unauthorized' })
}
