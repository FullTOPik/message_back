import { OmitType } from "@nestjs/mapped-types";
import { NewUserDTO } from "./NewUser.dto";

export class UserPayloadDTO extends OmitType(NewUserDTO, ['password']) {}
