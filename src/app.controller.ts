import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'why'; //เราทำแบบนี้ได้ แต่เราไม่ควรทำเพราะเราจะใช้แค่ controller อย่างเดียวไม่ได้เราต้องแยกการจัดการเป็นส่วนๆด้วย เลยมีการแยกส่วนคอนโทรเลอที่ใช้ในการแฮนเดิลรีเควส และเซอวิชออกมาเพื่อเอาไปพูดคุยจัดการกับดาต้าเบส
  }
}

//คอนโทรลเลอคือคนที่รับรีเควสมา Controller() ต้องระบุพาทเริ่มต้นซึ่งถ้าไม่ระบุก็แปลว่าใช้แสลดของมันเอง โดยเก็ทที่เราสร้างเนี่ย มันจะรีเทริน appService ขึ้นมาจากการInjectable AppService จาก ./app.service