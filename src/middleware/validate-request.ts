import {validationResult} from "express-validator";
import {Response, Request, NextFunction} from 'express';
import { RequestValidationError } from "../errors/request-validation-error";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array())
    }
    next();
}