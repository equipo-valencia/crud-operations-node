import { Router } from 'express';
import { authorsController } from '../controllers/author.controller';

class AuthorRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', 
        authorsController.author
        );

        this.router.get('/:id/books', authorsController.authorBooks)
        this.router.delete('/:id/books', authorsController.delete);
       
        this.router.post('/:id/books',
        authorsController.create
        );
      

    }
}

export const authorRoutes = new AuthorRoutes();