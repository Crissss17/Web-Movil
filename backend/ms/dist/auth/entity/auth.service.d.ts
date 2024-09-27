import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";
import { ForgorPassDto } from "../dto/forgotpass.dto";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/ms-iam/users/user.service";
import { AuthResponse } from "../entity/auth.response";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register({ password, email, name, apellidos }: RegisterDto): Promise<AuthResponse>;
    login({ email, password }: LoginDto): Promise<AuthResponse>;
    forgotpass({ email }: ForgorPassDto): Promise<AuthResponse>;
    sendPasswordResetEmail(email: string, newPassword: string): Promise<void>;
}
