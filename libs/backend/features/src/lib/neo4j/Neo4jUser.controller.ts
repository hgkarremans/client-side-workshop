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

  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    const user = await this.neo4jService.getOne(id);
    return user;
  }

  @Post()
  async createUser(@Body() newUser: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'friends'>) {
    const createdUser = await this.neo4jService.create(newUser);
    return createdUser;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updatedUser: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'role' | 'friends'>) {
    const result = await this.neo4jService.update(id, updatedUser);
    return result;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const result = await this.neo4jService.delete(id);
    return result;
  }
}
