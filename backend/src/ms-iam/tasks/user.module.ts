import { Module } from '@nestjs/common';
import { TasksController } from './user.controller';
import { TasksService } from './user.service';
import { MongooseModule} from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/ms-iam/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:Task.name,
        schema: TaskSchema,
      },
    ])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
