import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface ComplimentRequest {
  tagId: string,
  userSender: string,
  userReceiver: string,
  message: string
}

class CreateComplimentService {
  async execute ({ tagId, userSender, userReceiver, message }: ComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (userSender === userReceiver) {
      throw new Error('Incorrect user receiver!')
    }

    const userReceiverExists = await usersRepositories.findOne(userReceiver)

    if (!userReceiverExists) {
      throw new Error('User receiver does not exists!')
    }

    const compliment = complimentsRepositories.create({
      tagId,
      userSender,
      userReceiver,
      message
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }
