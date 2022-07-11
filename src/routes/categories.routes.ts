import { CreateCategoryController } from "@controllers/categories/CreateCategoryController";
import { ListCategoriesController } from "@controllers/categories/ListCateogriesController";
import { Router } from "express";
import { isAuthenticated } from "middlewares/isAuthenticated";

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post('/', isAuthenticated, createCategoryController.handle)
categoriesRoutes.get('/', isAuthenticated, listCategoriesController.handle)

export { categoriesRoutes }