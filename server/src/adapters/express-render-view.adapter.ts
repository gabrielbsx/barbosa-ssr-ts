import { type Request, type Response } from 'express'
import { type RenderView } from '../contracts'

export const renderViewAdapt = ({ view, data }: Omit<RenderView, 'endpoint'>) => {
  return (_request: Request, response: Response) => {
    try {
      response.render(view, data)
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
