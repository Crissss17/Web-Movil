import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cristianmoyano:TheCriss_17@cluster0.v96or.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    TasksModule],
})
export class AppModule {}
