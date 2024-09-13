import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    findAll(): string;
    findOne(): string;
    create(): string;
    delete(): string;
    update(): string;
}
