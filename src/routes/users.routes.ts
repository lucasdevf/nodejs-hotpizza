import { Router } from "express";
import { AuthUserController } from "../controllers/users/AuthUserController";
import { CreateUserController } from "../controllers/users/CreateUserController";

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.post('/sessions', authUserController.handle)

export { usersRoutes }