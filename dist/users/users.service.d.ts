export declare class UsersService {
    private readonly users;
    findAll(): [{
        id: number;
        username: string;
        age: number;
    }, {
        id: number;
        name: string;
        age: number;
    }];
}
