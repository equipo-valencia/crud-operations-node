import { Router } from 'express';
import { saleController } from '../controllers/sales.controller';

class SaleRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', 
        saleController.sale
        );
}
    }
    
export const saleRoutes = new SaleRoutes();
