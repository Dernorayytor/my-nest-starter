import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order,  OrderDocument } from "./schemas/order.schemas";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(  
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>
) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const result = new this.orderModel(createOrderDto);
    return result.save();
  }
  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
