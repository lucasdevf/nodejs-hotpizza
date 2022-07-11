import { CreateCategoryService } from "@services/categories/CreateCategoryService";
import { Request, Response } from "express";



class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { name } = request.body

    const createCategoryService = new CreateCategoryService()

    const category = await createCategoryService.execute(name)

    return response.status(201).json(category)

  }

}

export { CreateCategoryController }