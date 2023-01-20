import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { MAX_AGE_ACCESS, MAX_AGE_REFRESH } from 'src/config/config';
import { NewUserDTO } from 'src/users/dto/NewUser.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
  async registration(
    @Body() newUserDTO: NewUserDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {  
    const {
      tokens: { accessToken, refreshToken },
    } = await this.authService.registration(newUserDTO);
    
    response.cookie('accessToken', accessToken, {
      maxAge: MAX_AGE_ACCESS,
      httpOnly: true,
    });
    response.cookie('refreshToken', refreshToken, {
      maxAge: MAX_AGE_REFRESH,
      httpOnly: true,
    });
  }
}
