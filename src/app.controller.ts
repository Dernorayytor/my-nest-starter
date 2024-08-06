import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//คอนโทรลเลอคือคนที่รับรีเควสมา Controller() ต้องระบุพาทเริ่มต้นซึ่งถ้าไม่ระบุก็แปลว่าใช้แสลดของมันเอง โดยเก็ทที่เราสร้างเนี่ย มันจะรีเทริน appService ขึ้นมาจากการInjectable AppService จาก ./app.service