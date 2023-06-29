declare namespace Express {
  export interface Request {
    render: (view: string, data?: any) => void
  }
}
