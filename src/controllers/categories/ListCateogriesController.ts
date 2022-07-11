import { ListCategoriesService } from "@services/categories/ListCategoriesService";
import { Request, Response } from "express";


class ListCategoriesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const listCategoriesService = new ListCategoriesService()

    const categories = await listCategoriesService.execute()

    return response.json(categories)

  }

}

export { ListCategoriesController }