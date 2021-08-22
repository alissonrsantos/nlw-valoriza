import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute ({ email, password }: AuthenticateRequest) {
    const usersRepositories = await getCustomRepository(UsersRepositories)

    // Verificar se o email existe
    const user = await usersRepositories.findOne({ email })

    // Verfica se o usuário existe
    if (!user) {
      throw new Error('Email/Password incorrect!')
    }

    // Verifica se a senha está correta
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect!')
    }

    // Gerar Token
    const token = sign({
      email: user.email
    }, '8c7d66dff8a042a0ca4dafec66a3cb0d', {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }
}

export { AuthenticateUserService }
