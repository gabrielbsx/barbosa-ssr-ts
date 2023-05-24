export interface Request<BODY = any, PARAMS = any, QUERY = any, HEADERS = any> {
  body: BODY
  params: PARAMS
  query: QUERY
  headers: HEADERS
}

export type Method = 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'

export interface Response<DATA = any> {
  statusCode: number
  data?: DATA
  view?: string
}

export interface Http {
  request: Request
  response: Response
}
