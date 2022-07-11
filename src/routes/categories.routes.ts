import { CreateCategoryController } from "@controllers/categories/CreateCategoryController";
import { Router } from "express";
import { isAuthenticated } from "middlewares/isAuthenticated";

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', isAuthenticated, createCategoryController.handle)

export { categoriesRoutes }