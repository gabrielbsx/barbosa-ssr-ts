import { type Server } from '../../server/src/contracts'
import server from '../../server/src/server'
import { type ApplicationCore } from './app.interface'

class Application implements ApplicationCore {
  constructor (private readonly serverCore: Server) {}
  run = (): void => {
    this.serverCore()
  }
}

const serverCore: Server = server
const application = new Application(serverCore)

application.run()
