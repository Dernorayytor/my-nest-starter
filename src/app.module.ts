import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/dernorayytor?authSource=admin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//ตัวโมลดูล ที่รวมทั้ง Controller และ Service