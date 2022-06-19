import { sign } from 'jsonwebtoken'

import { PasswordProvider } from "../../providers/PasswordProvider";

import { ListUserByEmailService } from './ListUserByEmailService'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  },
  token: string
}

class AuthUserService {

  async execute({ email, password }: IRequest): Promise<IResponse> {

    /* validates if user exists */
    const listUserByEmailService = new ListUserByEmailService()
    const userExists = await listUserByEmailService.execute({
      email
    })
    if (!userExists) throw new Error('User or pass invalid!')

    /* validates if password hash match with password */
    const passwordProvider = new PasswordProvider()
    const passwordMatch = await passwordProvider.compareHashWithPassword(password, userExists.password)
    if (!passwordMatch) throw new Error('User or pass invalid!')

    /* generate auth token */
    const token = sign(
      {
        name: userExists.name,
        email: userExists.email
      },
      process.env.JWT_SECRET_KEY,
      {
        subject: userExists.id,
        expiresIn: '30d'
      }
    )

    return {
      user: {
        name: userExists.name,
        email: userExists.email
      },
      token
    }
  }

}

export { AuthUserService }