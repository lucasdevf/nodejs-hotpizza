import prismaClient from "../../prisma"

class GetUserLoggedService {

  async execute(id: string) {
    
    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    /* validates if user exists */
    if(!user) throw new Error('User doest not exists!')

    delete user.password

    return user

  }

}

export { GetUserLoggedService }