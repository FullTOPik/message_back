import { Injectable } from "@nestjs/common";
import { Token } from "../models/token.model";
import { Repository } from "typeorm";
import * as jwt from 'jsonwebtoken';
import { UserPayloadDTO } from "src/users/dto/UserPayload.dto";
import { ACCESS_EXPIRES_IN, ACCESS_SECRET, REFRESH_EXPIRES_IN, REFRESH_SECRET } from "src/config/config";
import { NewTokenDTO } from "../dto/NewToken.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository (Token)
      private tokenRepository: Repository<Token>
    ) {}

  generateTokens(userPayloadDTO: UserPayloadDTO) {
    return {
      refreshToken: jwt.sign(userPayloadDTO, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN }),
      accessToken: jwt.sign(userPayloadDTO, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES_IN }),
    }
  }

  saveToken(newTokenDto: NewTokenDTO) {
    return this.tokenRepository.save(newTokenDto);
  }
}
