import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

//@Global()
//folosind Global trebuie sa exportam acel service 
//astfel optinem acces global la modulul User
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
