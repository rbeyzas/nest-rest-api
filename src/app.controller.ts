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
// appService isimli bir instance oluşturduk.
// AppService class'ı içerisindeki getHello() fonksiyonu çağrıldı.
// o class'ın içerisinde getHello() fonksiyonu çağrıldı.
// request atan kişiye response olarak "Hello World!" döndürdük.
// getHello(): string {
// return edilecek objenin ne tipte olduğunu belirttik. sebebi typescript.
