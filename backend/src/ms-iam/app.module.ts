import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cristianmoyano:TheCriss_17@cluster0.v96or.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule],
})
export class AppModule {}
