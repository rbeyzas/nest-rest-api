import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// app.module içerisine controller ve service dosyalarımızı import ederiz.
// sonrasında app.module'u main.ts dosyası içerisinde kullanırız.
// main.ts dosyası içerisinde AppModule'u kullanarak uygulamamızı başlatırız.
// Oluşturduğumuz usersModule'u app.module içerisine import ederiz.
// oluşturduğumuz tüm module'ları import içine eklememiz lazım yoksa çalışmaz.
