import { Request, Response } from 'express';
import { Book } from '../models/book.model';


class BookController {

    public async book (req: Request, res: Response) {        
    
        try{
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

    public async update (req: Request, res: Response) {

        try{
            const result = await Book.update(
                {
                    name: req.body.name,
                    isbn: req.body.isbn,
                    genres: req.body.genres
                }, 
                {where: {id: req.params.id}}
            )
        }catch (error) {
            res.json(error);
        }
    }
     
    public async delete (req: Request, res: Response) {

        try{
            const result = await Book.destroy({
                where:{
                    id: req.params.id
                }
            })
        }catch (error) {

        }
    }
     



}

export const bookController = new BookController();
