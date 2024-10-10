import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuhtDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
