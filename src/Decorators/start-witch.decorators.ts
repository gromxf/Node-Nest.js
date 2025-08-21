import { isValidationOptions, registerDecorator, ValidationOptions, type ValidationArguments, type Validator } from "class-validator";

export function StartWith(
    prefix: string,
    validationOptions?: ValidationOptions,
) {

    return (object: Object, propertyName: string) => {
        registerDecorator({
            name: 'startWith',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value === 'string' && value.startsWith(prefix);
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} must start with ${prefix}`;
                },
            },
        });
    };
};

