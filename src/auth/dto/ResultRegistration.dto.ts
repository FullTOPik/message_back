import { TokensDTO } from "src/token/dto/Tokens.dto";
import { UserPayloadDTO } from "src/users/dto/UserPayload.dto";

export class ResultRegistrationDTO {
  payload: UserPayloadDTO;
  tokens: TokensDTO;
}
