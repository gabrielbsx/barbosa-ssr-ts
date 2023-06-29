import eta from 'eta'
import express, { type Express } from 'express'
import { join } from 'node:path'
import { renderViewFactory } from './factories'
import { loadControllerFactory } from './factories/load-controller.factory'
import dotenv from 'dotenv'

dotenv.config()

const configMiddlewareServer = (application: Express): void => {
  application.use(express.json())
  application.use(express.urlencoded({ extended: true }))
  application.use(express.static(join(__dirname, 'ui', 'public')))
}

const configEngineRenderServer = (application: Express): void => {
  application.engine('html', eta.renderFile)
  application.set('views', join(__dirname, 'ui', 'pages'))
  application.set('view cache', true)
  application.set('view engine', 'eta')
}

const server = (): void => {
  const port = process.env.PORT ?? 3000
  const application = express()
  configMiddlewareServer(application)
  configEngineRenderServer(application)
  renderViewFactory(application)
  loadControllerFactory(application)
  application.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  })
}

server()
