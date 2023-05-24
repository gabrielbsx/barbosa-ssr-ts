import { type Method, type Controller, type Request, type Response } from '../contracts'
import { ok } from '../helpers'

class HomeController implements Controller {
  static endpoint = '/'
  static method: Method = 'post'
  async handle (httpRequest: Request): Promise<Response> {
    console.log(httpRequest)
    return ok({})
  }
}

export default HomeController
