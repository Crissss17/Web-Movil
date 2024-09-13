import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('ms-iam')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    findAll() {
        return 'Get all tasks';
    }

    @Get(':id')
    findOne() {
        return 'Get one tasks';
    }

    @Post()
    create() {
        return 'Createtasks';
    }

    @Delete(':id')
    delete(){
        return 'Delete task';
    }

    @Put(':id')
    update() {
        return 'Update task';
    }
}


