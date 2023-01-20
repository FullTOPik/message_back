import { PickType } from "@nestjs/mapped-types";
import { NewUserDTO } from "./NewUser.dto";

export class UserLoginDTO extends PickType(NewUserDTO, ['login']) {}
