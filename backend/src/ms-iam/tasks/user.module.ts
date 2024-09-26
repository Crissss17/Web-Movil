import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule} from '@nestjs/mongoose';
import { User, TaskSchema } from 'src/ms-iam/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:User.name,
        schema: TaskSchema,
      },
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class TasksModule {}
