import { type Request, type Response } from './http.contract'

export interface Controller {
  handle: (request: Request) => Promise<Response>
}
