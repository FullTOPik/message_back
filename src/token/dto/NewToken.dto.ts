import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NewTokenDTO {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
