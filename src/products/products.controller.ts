import { Controller, Get, Post, Body } from '@nestjs/common';
import {ProductsService} from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Get()
    getAllProducts(){
        return this.productsService.findAll();
    }

    @Post()
    addProduct(@Body() product) {
        return this.productsService.create(product);
    }

}