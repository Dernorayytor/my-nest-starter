import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAllProducts(){
        return 'This action returns all products.';
    }
}
