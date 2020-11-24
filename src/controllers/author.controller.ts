import { Request, Response } from 'express';
import { Author } from '../models/authors.model';
import { Book } from '../models/book.model';

class AuthorController {
    public async author (req: Request, res: Response) {

        try{
            const author = await Author.findAll({
                 raw: true});

            res.send(author);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async authorBooks (req: Request, res: Response) {

        try{
            const author = await Author.findAll({
                include: [
                    {
                    model: Book
                }
                ],
                where:{
                    id: req.params.id
                }
                 ,raw: true});

            res.send(author);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async delete (req: Request, res: Response) {

        try{
            const result = await Author.destroy({
                where:{
                    id: req.params.id
                }
            })
        }catch (error) {

        }
    }

    public async create (req: Request, res: Response) {
        
        try{
            const request = req.body;

            // 1º Check if book with body tittle exist. OK
            // 2º Si no existe libro lo creo con el authoe que tengo en el URL
            // 3º Si ya existe el libro, hago un update del book con el ID del autor que me ha dado el URL

            const newRelation = await Book.findOne({
                where:{
                    title: req.body.title
                },
            });
            if(newRelation){
                const result = await Book.update(
                    {
                        authorId: req.params.id,
                    }, 
                    {where: { title: req.body.title}}
                )
                res.json(newRelation);
            }else{
                // const request = req.body;
                const newBook = await Book.create({
                    title: req.body.title,
                    isbn: req.body.isbn,
                    genres: req.body.genres,
                    authorId: req.params.id

                })
                res.json(newBook);
            }

        }catch (error) {
            res.json(error);
        }
    }
}


export const authorsController = new AuthorController();