import { Request, Response, NextFunction  } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';

export const checkJwt = (roleToCheck: String) => {
    return (req:Request, res: Response, next: NextFunction) => {
        const token = <string> req.headers["authorization"];

        try {
            // devuelve el objeto del token
            jwt.verify(token, config.jwtSecret);
        
            // throw new Error("Dont have permmissions")
            // res 4040
        } catch (error) {

            res.sendStatus(401);
        }

        next();
    }
}

