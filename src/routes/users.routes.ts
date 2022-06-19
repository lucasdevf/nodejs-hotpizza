import { Router } from "express";
import { AuthUserController } from "../controllers/users/AuthUserController";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { GetUserLoggedController } from "@controllers/users/GetUserLoggedController";
import { isAuthenticated } from "middlewares/isAuthenticated";

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const getUserLoggedController = new GetUserLoggedController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.post('/sessions', authUserController.handle)
usersRoutes.get('/me', isAuthenticated, getUserLoggedController.handle)

export { usersRoutes }