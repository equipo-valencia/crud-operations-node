import { Router } from 'express';
import { bookController } from '../controllers/book.controller';

class BookRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/:id', 
        bookController.book
        );
        this.router.post('/',
        bookController.create
        );
      

    }
}

export const bookRoutes = new BookRoutes();