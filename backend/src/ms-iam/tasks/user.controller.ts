import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/createUser.dto';

@Controller('ms-iam')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.finAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.userService.findOne(id);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        try { 
            return await this.userService.create(body);
        } catch (error) {
            if (error.code == 11000){
                throw new ConflictException('Ya Existe este usuario')
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const task = await this.userService.delete(id);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const task = await this.userService.update(id, body);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }
}


