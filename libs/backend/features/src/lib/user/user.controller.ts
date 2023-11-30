import { User } from '@avans-nx-workshop/shared/api';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

  @Get('')
  getAll(): User[] {
    console.log('getAll aangeroepen in backend');
    return this.userService.getUsers();
  }

//   @Get(':id')
//   getOne(@Param('id') id: number): User {
//     return this.userService.getUserById(id);
//   }

//   @Post('')
//   create(@Body() data: CreateUserDto): User {
//     return this.userService.create(data);
//   }

//   @Put(':id')
//   update(@Param('id') id:string, @Body() data: UpdateUserDto):\User {
//     return this.userService.update(id, data);
//   }

//   @Delete(':id')
//   del(@Param('id') id:string): User {
//     return this.userService.delete(id)
//   }
}