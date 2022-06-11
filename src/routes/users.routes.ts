import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";

const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post('/', createUserController.handle)

export { usersRoutes }