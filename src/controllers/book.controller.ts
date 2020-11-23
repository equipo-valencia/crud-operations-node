import { Request, Response } from 'express';
import { Book } from '../models/book.model';


class BookController {

    public async book (req: Request, res: Response) {        
    
        try{
            // SELECT * FROM USERS WHERE name = 'Antonio' AND id:3 AND familyName = 'Lozano' OR familyName='Belén'
            const book = await Book.findAll({
                where:{
                    id:req.params.id
                }, raw: true});

            res.send(book);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async create (req: Request, res: Response) {
        
        try{
            const request = req.body;
            const newBook = await Book.create(request);
            res.json(newBook);

        }catch (error) {
            res.json(error);
        }
    }
     



}

export const bookController = new BookController();
