import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  name: Types.ObjectId;

  @Prop()
  age: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);