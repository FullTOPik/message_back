import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class NewUserDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 40)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 40)
  login: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 12)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  lastName: string;
}
