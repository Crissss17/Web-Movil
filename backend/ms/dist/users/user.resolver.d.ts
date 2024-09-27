import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UsersResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
}
