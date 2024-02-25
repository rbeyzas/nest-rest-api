import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// buradaki mantık express'e çok benziyor.
// AppModule'u kullanarak uygulamamızı başlatıyoruz.
