import { PickType } from "@nestjs/mapped-types";
import { NewUserDTO } from "./NewUser.dto";

export class UserPhoneDTO extends PickType(NewUserDTO, ['phone']) {}
