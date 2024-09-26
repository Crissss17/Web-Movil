import { IsBoolean, IsString, IsOptional, isNotEmpty, IsNotEmpty} from "class-validator";


export class UpdateTaskDto {

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