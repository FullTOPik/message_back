import { Injectable } from '@nestjs/common';
import { TokenService } from 'src/token/services/token.service';
import { NewUserDTO } from 'src/users/dto/NewUser.dto';
import { UserService } from 'src/users/services/user.service';
import { ResultRegistrationDTO } from '../dto/ResultRegistration.dto';

@Injectable()
export class AuthService {
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
  ) {}

  async registration(newUser: NewUserDTO): Promise<ResultRegistrationDTO> {
    const { password, ...payload } = await this.userService.addNewUser(newUser);
    const tokens = this.tokenService.generateTokens(payload);

    this.tokenService.saveToken({
      token: tokens.refreshToken,
      userId: payload.id,
    });

    return {
      payload,
      tokens,
    };
  }
}
