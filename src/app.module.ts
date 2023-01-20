import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConnectParams } from './connect';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConnectParams),
    TokenModule, 
    AuthModule,
    UserModule,
  ],
  controllers: [],
})
export class AppModule {}
