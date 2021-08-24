import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
  // Receber tokens
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, '8c7d66dff8a042a0ca4dafec66a3cb0d') as IPayload

    request.userId = sub

    return next()
  } catch (error) {
    return response.status(401).end()
  }
  // Verificar se token é válido
  // Recuperar informações do usuário
}
