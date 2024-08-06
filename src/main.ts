import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();

//พวกคำสั่งที่ใช้ในการสร้างhttpเซิฟเวอร์ โดยจะ import AppModule เพื่อทำการ create ตัวฟังก์ชั่นขึ้นมา ตัว NestFactory.create โดยมันเป็นจุดเริ่มต้นของ แอพพลิเคชั่น โดยมันจะอยู่ใน ./app.module
