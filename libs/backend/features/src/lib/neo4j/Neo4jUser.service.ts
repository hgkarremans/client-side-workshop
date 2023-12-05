import { Injectable } from '@nestjs/common';
import { User, UserGender, UserRole } from '@avans-nx-workshop/shared/api';
import { Logger } from '@nestjs/common';
import { Neo4jService } from 'nest-neo4j/dist';

@Injectable()
export class Neo4jUserService {
  private readonly TAG = 'Neo4jUserService';

  constructor(private readonly neo4jService: Neo4jService) {}

  async getAll() {
    Logger.log('getAll', this.TAG);

    const query = `MATCH (user:User) RETURN user`;
    const result = await this.neo4jService.read(query, {});
    
    Logger.log(`result: ${JSON.stringify(result)}`);
    return result?.records;
  }

  async getOne(id: string) {
    Logger.log(`getOne(${id})`, this.TAG);
    
    const query = `MATCH (n) WHERE n.Id = $id RETURN n`;
    const result = await this.neo4jService.write(query, { id: id });
    
    return result;
  }

  async create(newUser: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'friends'>) {
    Logger.log('create', this.TAG);

    const query = `
      MERGE (user:User {Id: $id})
      ON CREATE SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAdress = $emailAdress,
        user.dateOfBirth = $dateOfBirth,
        user.role = $role,
        user.friends = $friends
      ON MATCH SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAdress = $emailAdress,
        user.dateOfBirth = $dateOfBirth,
        user.role = $role,
        user.friends = $friends
      RETURN user
    `;
    
    const result = await this.neo4jService.write(query, {
      id: Math.floor(Math.random() * 10000),
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      image: newUser.image,
      emailAdress: newUser.emailAdress,
      dateOfBirth: newUser.dateOfBirth,
      role: UserRole.guest,
      friends: newUser.friends || [],
    });

    Logger.log(`result:${JSON.stringify(result)}`);
    return result;
  }

  async update(id: string, user: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'role' | 'friends'>) {
    Logger.log(`Update(${id})`, this.TAG);

    const query = `
      MATCH (user:User {Id: $id})
      SET
        user.firstName = $firstName,
        user.lastName = $lastName,
        user.image = $image,
        user.emailAdress = $emailAdress,
        user.dateOfBirth = $dateOfBirth,
        user.role = $role,
        user.friends = $friends
      RETURN user
    `;

    const result = await this.neo4jService.write(query, {
      id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      emailAdress: user.emailAdress,
      dateOfBirth: user.dateOfBirth,
      role: user.role,
      friends: user.friends || [],
    });

    return result;
  }

  async delete(id: string) {
    Logger.log(`Delete(${id})`, this.TAG);

    const query = `MATCH (n) WHERE n.Id = $id DETACH DELETE n`;
    const result = await this.neo4jService.write(query, { id: id });

    return result;
  }
}
