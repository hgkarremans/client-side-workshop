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

  async getOne(Id: string) {
    Logger.log(`getOne(${Id})`, this.TAG);

    const query = `MATCH (n) WHERE n.Id = $Id RETURN n`;

    console.log('Parameters:', { Id }); // Log the query parameters for debugging

    const result = await this.neo4jService.write(query, { Id: parseInt(Id) });
    console.log('Result:', result); // Log the result for debugging

    return result.records;
  }

  async create(newUser: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'gender' | 'friends'>) {
    Logger.log('create', this.TAG);

    const query = `
      MERGE (user:User {Id: $Id})
      ON CREATE SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAdress = $emailAdress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.friends = $friends
      ON MATCH SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAdress = $emailAdress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.friends = $friends
      RETURN user
    `;

    const result = await this.neo4jService.write(query, {
      Id: Math.floor(Math.random() * 10000),
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      image: newUser.image,
      emailAdress: newUser.emailAdress,
      dateOfBirth: newUser.dateOfBirth,
      gender: newUser.gender,
      role: UserRole.guest,
      friends: newUser.friends || [],
    });

    Logger.log(`result:${JSON.stringify(result)}`);
    return result;
  }

  async update(Id: string, user: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAdress' | 'dateOfBirth' | 'gender' | 'role' | 'friends'>) {
    Logger.log(`Update(${Id})`, this.TAG);

    const query = `
      MATCH (user:User {Id: $Id})
      SET
        user.firstName = $firstName,
        user.lastName = $lastName,
        user.image = $image,
        user.emailAdress = $emailAdress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.friends = $friends
      RETURN user
    `;

    const result = await this.neo4jService.write(query, {
      Id: parseInt(Id),
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      emailAdress: user.emailAdress,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      role: user.role,
      friends: user.friends || [],
    });

    return result.records;
  }

  async delete(Id: string) {
    Logger.log(`Delete(${Id})`, this.TAG);

    const query = `MATCH (n) WHERE n.Id = $Id DETACH DELETE n`;
    const result = await this.neo4jService.write(query, { Id: parseInt(Id) });

    return result;
  }
}
