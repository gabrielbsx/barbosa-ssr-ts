import { type Express } from 'express'
import { controllerAdapt } from '../adapters'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { type Method, type Controller } from '../contracts'

export const loadControllerFactory = (application: Express): void => {
  const modulesPath = join(__dirname, '..', 'modules')
  const modulesFiles = readdirSync(modulesPath)
  modulesFiles.forEach((moduleFile) => {
    import(`../modules/${moduleFile}`)
      .then((module: { default: any }) => {
        const Module = module.default
        const controller: Controller = new Module()
        application[Module.method as Method](Module.endpoint as string, controllerAdapt(controller))
      })
      .catch((error) => {
        console.error(error)
      })
  })
}
