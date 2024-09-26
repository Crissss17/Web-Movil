import { User } from 'src/ms-iam/schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/ms-iam/dto/createUser.dto';
import { UpdateUserDto } from 'src/ms-iam/dto/updateUser.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    finAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, User, "find", {}>;
    create(createTask: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, task: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
