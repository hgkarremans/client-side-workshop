import { Injectable } from '@nestjs/common';
import { User, UserGender, UserRole } from '@avans-nx-workshop/shared/api';
import { Logger } from '@nestjs/common';
import { Neo4jService } from 'nest-neo4j/dist';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Neo4jUserService {
  private readonly TAG = 'Neo4jUserService';

  constructor(
    private readonly neo4jService: Neo4jService,
    private readonly jwtService: JwtService,
    ) {}

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
  async findOne(emailAddress: string): Promise<User> {
    const query = `MATCH (user:User {emailAddress: $emailAddress}) RETURN user`;
    const result = await this.neo4jService.read(query, { emailAddress });
    return result?.records[0]?.get('user').properties;
  }
    

  async create(newUser: User) {
    Logger.log('create', this.TAG);

    // Assuming you want to hash the password before storing it
    const hashedPassword = await this.generateHash(newUser.passwordHash);

    const query = `
      MERGE (user:User {Id: $Id})
      ON CREATE SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAddress = $emailAddress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.friends = $friends,
        user.hasTransportation = $hasTransportation,
        user.passwordHash = $passwordHash
      ON MATCH SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAddress = $emailAddress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.friends = $friends,
        user.hasTransportation = $hasTransportation,
        user.passwordHash = $passwordHash
      RETURN user
    `;

    const result = await this.neo4jService.write(query, {
      Id: Math.floor(Math.random() * 10000),
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      image: newUser.image,
      emailAddress: newUser.emailAddress,
      dateOfBirth: newUser.dateOfBirth,
      gender: newUser.gender,
      role: newUser.role || UserRole.guest, // Provide a default value if not specified
      friends: newUser.friends || [],
      hasTransportation: newUser.hasTransportation || false, // Provide a default value if not specified
      passwordHash: hashedPassword,
    });

    // Generate a JWT for the newly created user
    const userProperties = result.records[0]?.get('user').properties;
    const payload = { sub: userProperties.Id, username: userProperties.emailAddress };
    const accessToken = await this.jwtService.signAsync(payload);
    console.log('payload: ', payload)
    console.log('accessToken:', accessToken); // Log the JWT for debugging

    // Include the JWT in the response
    return { user: userProperties, access_token: accessToken };
  }
  
  

  async update(Id: string, user: Pick<User, 'firstName' | 'lastName' | 'image' | 'emailAddress' | 'dateOfBirth' | 'gender' | 'role' | 'friends'>) {
    Logger.log(`Update(${Id})`, this.TAG);

    const query = `
      MATCH (user:User {Id: $Id})
      SET
        user.firstName = $firstName,
        user.lastName = $lastName,
        user.image = $image,
        user.emailAddress = $emailAddress,
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
      emailAddress: user.emailAddress,
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
  async validatePassword (password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
  async generateHash (password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

}
