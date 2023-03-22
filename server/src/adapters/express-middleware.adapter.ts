import { type Request, type Response } from 'express'
import { type Http, type Middleware } from '../contracts'

export const middlewareAdapt = (middleware: Middleware) => {
  return async (request: Request, response: Response) => {
    const httpRequest: Http['request'] = {
      body: request.body,
      params: request.params,
      query: request.query,
      headers: request.headers
    }
    try {
      const httpResponse = await middleware.handle(httpRequest)
      return response.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
