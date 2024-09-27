import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UserService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
}
