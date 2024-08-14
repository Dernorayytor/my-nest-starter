import { Injectable, Delete , NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schemas';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const result = new this.userModel(createUserDto)
    return result.save();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
//ย่อโค้ดไม่ต้องใช้ try catch ก็ได้
}
//new: true ใส่เพื่อบ่งบอกว่าเอาค่าใหม่หลังอัพเดทให้ด้วย
//exec() เป็นอะไรที่ต้องใส่ async และ Promise<xxx>
//อันไหนที่ async และมี Promise<xxx> nestjs จะทำการแฮนเดิลออโต้