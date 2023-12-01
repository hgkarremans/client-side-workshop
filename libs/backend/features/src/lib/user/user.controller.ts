import { User } from '@avans-nx-workshop/shared/api';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
    // constructor(private readonly userService: UserService) {}

    // @Get()
    // getUsers(): Promise<User[]> {
    //   return this.userService.getUsers();
    // }

}