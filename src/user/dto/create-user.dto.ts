import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsNotEmpty, IsString,
    Length
} from "class-validator";
import { StartWith } from "src/Decorators/start-witch.decorators";

export enum UserTags {
    WORK = 'work',
    JOB = 'job',
    PERSONAL = 'personal',
};

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
    @IsEnum(UserTags, { each: true, message: 'Each tag must be a valid enum value' })
    tags: UserTags[];
}
