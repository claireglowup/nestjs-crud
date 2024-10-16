import { IsNotEmpty, IsString } from 'class-validator';

export class ContactDto {
  @IsString()
  @IsNotEmpty()
  phone: string;
}
