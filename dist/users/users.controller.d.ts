import { CreatePersonDto } from './dto/create-users-dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): [{
        id: number;
        username: string;
        age: number;
    }, {
        id: number;
        name: string;
        age: number;
    }];
    getOne(id: string): string;
    create(allProps: CreatePersonDto): string;
}
