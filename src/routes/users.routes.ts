import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { checkJwt } from '../middlewares/check.Jwt';


class UsersRoutes {

    public router: Router = Router();

    constructor(){
        
        this.router.get('/',[checkJwt(1) ], usersController.allUsers);
        this.router.get('/:id',[checkJwt(2)], usersController.user);
        this.router.post('/', usersController.create);
        this.router.put('/:id', usersController.update);
        this.router.delete('/:id', usersController.delete);

    }
}

export const userRoutes = new UsersRoutes();
