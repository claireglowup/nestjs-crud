import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//dto for auth
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
