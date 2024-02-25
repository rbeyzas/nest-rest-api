import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    // return 'Get all persons';
    return this.userService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Get person with id ${id}`;
  }
  @Post()
  create(@Body() allProps: CreatePersonDto) {
    return `User created with name: ${allProps.username}`;
  }
}

// Controller decorator sayesinde route'larımızı tanımlayabiliyoruz.
// localhost:3000/users adresine gittiğimizde "All users" yazısını göreceğiz.
// Get handler fonksiyonu içerisinde return edilen objenin ne tipte olduğunu belirttik. sebebi typescript.
// Get handler içerisine parametre alabiliriz. Örneğin:
// Get içerisine eklediğimiz değeri @Param decorator'ü ile alabiliriz.
// Param ile alında değerin tipini mutlaka yaz

// post request atarken body içerisine bir obje göndermemiz gerekiyor.
// bu sebepten dolayı @Body decorator'ü ile body içerisindeki objeyi alıyoruz.
// gelen giden datanın tipini belirtmek için dto oluşturmamı gerekiyor.
//   create(@Body() x: CreatePersonDto) {
// tüm body içerisindeki datayı x isimli bir obje içerisine alıyoruz.
// postman -> body -> raw -> json -> { "username": "test" } şeklinde bir obje gönder
// constructor(private x: UsersService) {} buradaki x UserService'dekş class'ı temsil ediyor.
