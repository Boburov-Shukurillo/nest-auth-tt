import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatedUserDto {
    @IsOptional()
    @IsNotEmpty()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsBoolean()
    blocked: boolean = false;
}