import { Router } from "express";

const routes = Router()

routes.get('/test', (request, response) => {
  return response.send()
})

export { routes }