import prismaClient from "../../prisma";

interface IRequest {
  email: string
}

class ListUserByEmailService {

  async execute({ email }: IRequest) {

    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    return user
  }

}

export { ListUserByEmailService }