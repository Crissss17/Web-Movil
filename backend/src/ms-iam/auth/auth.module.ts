import { Module } from "@nestjs/common";
import { UsersModule } from "src/ms-iam/users/user.module";
import { AuthService } from "./entity/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/jwt.constant";
import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions:{
        expiresIn:'80000s'
      },
    }),
  ],
  controllers: [],
  providers: [AuthService,AuthResolver],
})
export class AuthModule {}