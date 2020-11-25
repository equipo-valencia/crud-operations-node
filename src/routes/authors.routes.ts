import { Router } from 'express';
import { authorsController } from '../controllers/author.controller';
import { checkJwt } from '../middlewares/check.Jwt';


class AuthorRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/',[checkJwt], 
        authorsController.author
        );

        this.router.get('/:id/books', authorsController.authorBooks)
        this.router.put('/:id/books', authorsController.deleteAuthorId);
       
        this.router.post('/:id/books',
        authorsController.create
        );
      

    }
}

export const authorRoutes = new AuthorRoutes();