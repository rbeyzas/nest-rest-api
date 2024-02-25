import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = ([] = [
    {
      id: 1,
      username: 'John Doe',
      age: 25,
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 26,
    },
  ]);
  findAll() {
    return this.users;
  }
}

// fonksiyonelliği service dosyası içerisine yazmalıyız.
// class'ın içerisindeki fonksiyonlar metottur.
// Injectable() decorator'ı ile bu class'ı inject edebiliriz.
// isminden anlayacağımız üzere bunu başka yere inject edebilirsin
// bu class'ı alıp users.controller içerisine constructor olarak ekleyebiliriz. bu sayede bu classtan bir instance oluşturabiliriz.
// sonrasında bu instance'la metotlara istek atabilirim
