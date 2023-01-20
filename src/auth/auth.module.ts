import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { TokenModule } from "src/token/token.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
@Module({
  imports: [UserModule, TokenModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
