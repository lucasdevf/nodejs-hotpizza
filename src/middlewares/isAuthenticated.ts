import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const authToken = request.headers.authorization

  if(!authToken) {
    return response.status(401).json({ error: 'Token missing!' })
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, process.env.JWT_SECRET_KEY) as IPayload

    next()
  } catch (err) {
    return response.status(401).json({
      error: 'Unauthorized'
    })
  }

}