import { type Request, type Response } from 'express'
import { type Controller, type Http } from '../contracts'

export const controllerAdapt = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: Http['request'] = {
      body: request.body,
      params: request.params,
      query: request.query,
      headers: request.headers
    }
    try {
      const httpResponse = await controller.handle(httpRequest)
      return response.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
