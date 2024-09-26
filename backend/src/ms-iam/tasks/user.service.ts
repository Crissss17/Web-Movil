import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/ms-iam/schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/ms-iam/dto/createUser.dto';
import { UpdateUserDto } from 'src/ms-iam/dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    finAll() {
        return this.userModel.find();
    }
    async create(createTask:CreateUserDto) {
       const newTask =  new this.userModel(createTask);
       return newTask.save();
    }

    async findOne(id:string){
       return this.userModel.findById(id);
    }

    async delete(id:string){
        return this.userModel.findByIdAndDelete(id);
    }

    async update(id:string, task: UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, task, {new:true});
    }
}
