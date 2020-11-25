import { Request, Response } from 'express';
import { rename } from 'fs';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { User } from '../models/user.model';

 
class AuthController {

    public async auth (req: Request, res: Response) {      
        try{

            const findUser = await User.findOne({
                where:{
                    email: req.body.email,
                    password: req.body.password
                }
            })
            if(findUser){
                const token = jwt.sign(
                    {
                    email: req.body.email,
                    password: req.body.password
                    },
                    config.jwtSecret,
                    {
                    expiresIn: '1h'
                    }
                ); 
                res.send(token); 
            }else{
                res.json('Error: 404. User not found.')
            } 
           
        }catch (error) {

                // res.sendStatus(404)
                // res.json(404)
                res.send(error)
        }
    }
}

export const authController = new AuthController();
