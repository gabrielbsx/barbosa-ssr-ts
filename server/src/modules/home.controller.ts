import { type Controller, type Request, type Response } from '../contracts'
import { ok } from '../helpers'

class HomeController implements Controller {
  async handle (httpRequest: Request): Promise<Response> {
    console.log(httpRequest)
    return ok({})
  }
}

export default HomeController
