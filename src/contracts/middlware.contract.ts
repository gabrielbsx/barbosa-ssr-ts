import { type Request, type Response } from './http.contract'

export interface Middleware {
  handle: (request: Request) => Promise<Response>
}
