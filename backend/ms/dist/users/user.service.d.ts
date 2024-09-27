import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { User } from "./entities/user.entity";
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findOneByEmail(email: string): Promise<User | undefined>;
    updatePassword(userId: number, newPassword: string): Promise<void>;
}
