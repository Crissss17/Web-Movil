import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { TasksService } from './user.service';
import { CreateTaskDto } from '../dto/createUser.dto';

@Controller('ms-iam')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    findAll() {
        return this.tasksService.finAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.tasksService.findOne(id);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Post()
    async create(@Body() body: CreateTaskDto) {
        try { 
            return await this.tasksService.create(body);
        } catch (error) {
            if (error.code == 11000){
                throw new ConflictException('Ya Existe esta tarea')
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const task = await this.tasksService.delete(id);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const task = await this.tasksService.update(id, body);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }
}


