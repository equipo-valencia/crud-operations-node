import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import data from '../config/config.json';

 


class AuthController {

    public async auth (req: Request, res: Response) {      
        
        const token = jwt.sign(
            {
               email: req.body.email.email
            },
            data.jwtSecret,
            {
                expiresIn: '1h'
            }
        )
    
      res.sendStatus(200);
    }
}

export const authController = new AuthController();
