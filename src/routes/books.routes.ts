import { Router } from 'express';
import { bookController} from '../controllers/book.controller';

class BookRoutes {

    public router: Router = Router();

    constructor(){

        this.router.put('/:id', bookController.update);
        this.router.delete('/:id', bookController.delete);
    }
}

export const bookRoutes = new BookRoutes();