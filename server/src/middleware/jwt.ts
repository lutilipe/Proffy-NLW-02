import { verifyJwt, getTokenFromHeaders } from '../helpers/jwt'
import { Request, Response, NextFunction } from 'express'

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const { url: path } = req

  const excludedPaths = ['/sign-in', '/sign-up']
  const isExcluded = !!excludedPaths.find((p) => path.startsWith(p))
  if (isExcluded) {
    return next()
  }

  const token = getTokenFromHeaders(req.headers)

  if (!token) {
    return res.status(401).json({ message: 'Invalid token.' })
  }

  try {
    const decoded = verifyJwt(token)
    req.accountId = Object(decoded).id
    next()
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token.' })
  }
}

export default checkJwt
