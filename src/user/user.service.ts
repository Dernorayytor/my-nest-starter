import { Injectable, Delete , NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const result = this.userModel.findByIdAndUpdate(
      id,updateUserDto,{new: true}
    ).exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.userModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('id not found');
      }
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}
//new: true ใส่เพื่อบ่งบอกว่าเอาค่าใหม่หลังอัพเดทให้ด้วย
//exec() เป็นอะไรที่ต้องใส่ async และ Promise<xxx>
//อันไหนที่ async และมี Promise<xxx> nestjs จะทำการแฮนเดิลออโต้