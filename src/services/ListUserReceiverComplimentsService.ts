import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class ListUserReceiverComplimentsService {
  async execute (userId: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      where: {
        userReceiver: userId
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments
  }
}

export { ListUserReceiverComplimentsService }
