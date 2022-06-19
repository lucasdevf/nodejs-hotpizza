import { Request, Response } from "express";

class GetUserLoggedController {

  async handle(request: Request, response: Response): Promise<Response> {

    return response.send()

  }

}

export { GetUserLoggedController }