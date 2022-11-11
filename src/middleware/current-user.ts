import { verify } from "jsonwebtoken";
import {Express, Request, Response, NextFunction } from "express";

interface UserPayload {
    email: string;
    id: string;
}

declare global {
    namespace Express {
        interface Request{
            currentUser?: UserPayload
        }
    }
}

export const currentUser = (req: Request, response: Response, next: NextFunction) => {
    if(!req.session?.jwt){
        return next();
    }

    try {
        const payload = verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
        req.currentUser = payload
    } catch (error) {

    }

    next();
}