import prismaClient from "../../prisma";

class CreateCategoryService {

  async execute(name: string) {

    /* validates if category already exist */
    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name
      }
    })

    if(categoryExists) throw new Error('Category already exists!')

    /* create category */
    const category = await prismaClient.category.create({
      data: {
        name
      }
    })

    return category

  }

}

export { CreateCategoryService }