import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './models/token.model';
import { TokenService } from './services/token.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Token])
  ],
  providers: [TokenService],
  exports: [TokenService],
})

export class TokenModule {}
