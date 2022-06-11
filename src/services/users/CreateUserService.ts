import prismaClient from '../../prisma'

import { Bcryptjs } from '../../shared/EncryptPassword/implementations/Bcryptjs'


interface IRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {

  async execute({ name, email, password }: IRequest) {

    /* validates is email already exists */
    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (emailAlreadyExists) throw new Error('Email already exists!')

    const bcryptjs = new Bcryptjs()

    const passwordHash = await bcryptjs.encryptPassword(password)

    /* register user */
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    return user
  }

}

export { CreateUserService }