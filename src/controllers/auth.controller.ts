import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import data from '../config/config.json';

 


class AuthController {

    public async auth (req: Request, res: Response) {      
        
        const token = jwt.sign(
            {
               email: req.body.email
            },
            data.jwtSecret,
            {
                expiresIn: '1h'
            }
        )
    
      res.send(token);
    }
}

export const authController = new AuthController();
