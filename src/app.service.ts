import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//ในเซอวิช เราได้ทำการกำหนด Injectable ก้อนนี้ export class AppService { getHello(): string { return 'Hello World!'; } } เพื่อให้ทุกคนที่อยู่ในโมลดูลใช้งานสิ่งๆนี้ที่อยู่ในเซอวิชได้