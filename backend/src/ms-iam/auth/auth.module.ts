import { Module } from '@nestjs/common';
import { UsersModule } from '../users/user.module';
import { AuthService } from './entity/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '80000s',
      },
    }),
  ],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}