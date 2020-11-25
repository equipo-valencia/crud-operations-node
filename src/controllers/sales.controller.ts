import { Request, Response } from 'express';
import { Book } from '../models/book.model';
import { Sales } from '../models/sales.models';
import { User } from '../models/user.model';

class SaleController {
    
    public async sale (req: Request, res: Response) {

        try{
            const sale = await Sales.findAll({
                include: [
                    {model: User},
                    {model: Book}
                ],
                nest: true
            });
            res.json(sale);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }
}

export const saleController = new SaleController();