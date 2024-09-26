import { IsBoolean, IsString, IsOptional, isNotEmpty, IsNotEmpty} from "class-validator";


export class UpdateUserDto {

    @IsString()
    @IsOptional()
    tittle?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}