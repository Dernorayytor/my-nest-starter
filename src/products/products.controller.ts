import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAllProducts(){
        return 'product';
    }


    @Post()
    addProduct(@Body() product) {
        return product;
    }

}