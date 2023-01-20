import { PickType } from "@nestjs/mapped-types";
import { NewUserDTO } from "./NewUser.dto";

export class UserEmailDTO extends PickType(NewUserDTO, ['email']) {}
