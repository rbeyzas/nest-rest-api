import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// UsersModule'u AppModule içerisine import etmemiz lazım.
// yoksa bu module'u kullanamayız.
// buraya import ettiğimizi AppModule'a söylüyoruz o da bu modulleri kullanıyor.
