import {
    ArrayNotEmpty,
    IsArray,
    IsNotEmpty, IsString,
    Length
} from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    @Length(3, 40, {
        message: 'Name must be between 3 and 40 characters long',
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @Length(13, 50)
    email: string;

    @IsArray()
    @ArrayNotEmpty({ message: 'Tags are required' })
    @IsString({ each: true, message: 'Each tag must be a string' })
    tags: string[];
}
