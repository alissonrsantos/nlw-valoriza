import { Request, Response } from 'express'
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService'

class ListUserReceiverComplimentsController {
  async handle (request: Request, response: Response) {
    const { userId } = request

    const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService()

    const compliments = await listUserReceiverComplimentsService.execute(userId)

    return response.json(compliments)
  }
}

export { ListUserReceiverComplimentsController }
