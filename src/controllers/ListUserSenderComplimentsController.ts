import { Request, Response } from 'express'
import { ListUserSenderComplimentsService } from '../services/ListUserSenderComplimentsService'

class ListUserSenderComplimentsController {
  async handle (request: Request, response: Response) {
    const { userId } = request

    const listUserSenderComplimentsService = new ListUserSenderComplimentsService()

    const compliments = await listUserSenderComplimentsService.execute(userId)

    return response.json(compliments)
  }
}

export { ListUserSenderComplimentsController }
