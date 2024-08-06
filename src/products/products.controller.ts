import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAllProducts(){
        return 'This action returns all products.';
    }


    @Post()
    addProduct(@Body() product) {
        return product;
    }

}