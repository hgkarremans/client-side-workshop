import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Neo4jUserService } from './Neo4jUser.service';
import { User } from '@avans-nx-workshop/shared/api';

@Controller('users')
export class UserController {
  constructor(private readonly neo4jService: Neo4jUserService) {}

  @Get()
  async getAllUsers() {
    const users = await this.neo4jService.getAll();
    return users;
  }

  @Get(':Id')
  async getOneUser(@Param('Id') Id: string) {
    const user = await this.neo4jService.getOne(Id);
    console.log("Id in controller: ", Id);
    console.log("controller user: ", user);
    return user;
  }
  


  @Post()
  async createUser(@Body() newUser: User) {
    const createdUser = await this.neo4jService.create(newUser);
    return createdUser;
  }

  @Put(':Id')
  async updateUser(@Param('Id') Id: string, @Body() updatedUser: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'gender' | 'role' | 'friends'>) {
    const result = await this.neo4jService.update(Id, updatedUser);
    return result;
  }

  @Delete(':Id')
  async deleteUser(@Param('Id') Id: string) {
    const result = await this.neo4jService.delete(Id);
    return result;
  }
}
