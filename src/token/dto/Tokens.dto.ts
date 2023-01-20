import { IsNotEmpty, IsString } from 'class-validator';

export class TokensDTO {
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
