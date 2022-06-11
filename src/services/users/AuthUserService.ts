import prismaClient from "../../prisma";

import { PasswordProvider } from "./shared/PasswordProvider";

import { ListUserByEmailService } from './ListUserByEmailService'

interface IRequest {
  email: string
  password: string
}

class AuthUserService {

  async execute({ email, password }: IRequest) {

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
  }

}

export { AuthUserService }