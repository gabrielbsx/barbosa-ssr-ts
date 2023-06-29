import { type Response } from '../contracts'

export const ok = <DATA = any>(data: DATA): Response => ({
  statusCode: 200,
  data
})

export const created = <DATA = any>(data: DATA): Response => ({
  statusCode: 201,
  data
})

export const badRequest = (): Response => ({
  statusCode: 400
})

export const forbidden = (): Response => ({
  statusCode: 403
})

export const internalError = (): Response => ({
  statusCode: 500
})
