import { Request, Response, NextFunction } from "express";

export const mapParam = (fromParam: string, toParam: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (req.params[fromParam]) {
      req.params[toParam] = req.params[fromParam];
    }

    delete req.params[fromParam];

    next();
  };
};
