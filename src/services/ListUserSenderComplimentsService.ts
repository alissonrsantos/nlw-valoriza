import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class ListUserSenderComplimentsService {
  async execute (userId: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      where: {
        userSender: userId
      }
    })

    return compliments
  }
}

export { ListUserSenderComplimentsService }
