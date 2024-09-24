import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/task.schema").Task, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(body: CreateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
