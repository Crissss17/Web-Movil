import { UserService } from './user.service';
import { CreateUserDto } from '../dto/createUser.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/user.schema").User, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(body: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
