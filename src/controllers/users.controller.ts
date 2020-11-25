import { Request, Response } from 'express';
import { User } from '../models/user.model';


class UsersController {

    public async user (req: Request, res: Response) {        
    
        try{
            // SELECT * FROM USERS WHERE name = 'Antonio' AND id:3 AND familyName = 'Lozano' OR familyName='Belén'
            const users = await User.findAll({
                where:{
                    id:req.params.id
                }, raw: true});

            res.send(users);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async allUsers (req: Request, res: Response) {        
    
        try{
            // SELECT * FROM USERS WHERE name = 'Antonio' AND id:3 AND familyName = 'Lozano' OR familyName='Belén'
            const users = await User.findAll({
                raw: true});

            res.send(users);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async create (req: Request, res: Response) {
        
        try{
            const request = req.body;
            const newUser = await User.create(request);
            res.json(newUser);

        }catch (error) {
            res.json(error);
        }
    }
    public async delete (req: Request, res: Response) {

        try {

            const user = await User.destroy(
                {
                    where:{
                        id: req.params.id
                    }
                }  
                   
            );
            res.sendStatus(200);
        } catch(error){
            res.json(error);
        }
    }

    public async update (req: Request, res: Response) {

        try {

            const user = await User.update(
               {
                   title: req.body.title,
                   familyName: req.body.familyName
               },
                {
                    where:{
                        id: req.params.id
                    }
                }  
                   
            );
            res.sendStatus(200);
        }catch(error){
            res.json(error);
        }
    }
}

export const usersController = new UsersController();