import express, { type Express } from 'express'
import { join } from 'node:path'
import { renderViewFactory } from './factories'

const configMiddlewareServer = (application: Express): void => {
  application.use(express.json())
  application.use(express.urlencoded({ extended: true }))
  application.use(express.static(join(__dirname, '..', '..', 'web', 'src', 'public')))
}

const configEngineRenderServer = (application: Express): void => {
  application.set('view engine', 'ejs')
  application.set('views', join(__dirname, '..', '..', 'web', 'src', 'pages'))
}

const server = (): void => {
  const application = express()
  configMiddlewareServer(application)
  configEngineRenderServer(application)
  renderViewFactory(application)
  application.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
  })
}

export default server
