import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    const {
      email,
      password
    } = request.body

    const authUserService = new AuthUserService()

    const auth = await authUserService.execute({
      email,
      password
    })

    return response.status(201).json(auth)
  }

}

export { AuthUserController }