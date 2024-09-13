import { Task } from 'src/ms-quest/schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/ms-quest/dto/create-task.dto';
import { UpdateTaskDto } from 'src/ms-quest/dto/update-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    finAll(): void;
    create(createTask: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, task: UpdateTaskDto): Promise<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
