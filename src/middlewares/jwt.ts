import { Request, Response, NextFunction } from 'express';
import JsonWebTokenJwtProvider from "../providers/implementations/JsonWebTokenJwtProvider";

const jwt = new JsonWebTokenJwtProvider();

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  if (!token)
    return res.status(403).json({
      success: false,
      message: 'Forbidden',
    });

  const valid = jwt.verify(token);

  if (!valid) return res.status(403).json({
    success: false,
    message: 'Token invalid or expired',
  });

  req.body = {
    ...req.body,
    userId: valid.id,
  };
  return next();
};

export default jwtMiddleware;
