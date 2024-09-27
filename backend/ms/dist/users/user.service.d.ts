import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User | undefined>;
    updatePassword(userId: number, newPassword: string): Promise<void>;
    findAll(): Promise<User[]>;
}
