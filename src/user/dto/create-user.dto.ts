export class CreateUserDto {
    readonly username: string;
    readonly age?: number;
    readonly email: string;
    readonly password: string;
}
