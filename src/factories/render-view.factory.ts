import { type Express } from 'express'
import { renderViewAdapt } from '../adapters'
import { renderListEndpointView } from '../helpers'

export const renderViewFactory = (application: Express): void => {
  renderListEndpointView().forEach(({ endpoint, view, data }) => {
    return application.get(endpoint, renderViewAdapt({ view, data }))
  })
}
