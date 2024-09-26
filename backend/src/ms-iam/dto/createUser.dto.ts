import { IsBoolean, IsString, IsOptional, isNotEmpty, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}