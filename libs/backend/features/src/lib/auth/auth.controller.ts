// // auth.controller.ts

// import { Controller, Post, Body } from '@nestjs/common';
// import { Neo4jUserService } from './Neo4jUser.service';
// import { AuthService } from './auth.service';
// import { CredentialsDto } from './dto/credentials.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(
//     private readonly neo4jService: Neo4jUserService,
//     private readonly authService: AuthService,
//   ) {}

//   @Post('login')
//   async login(@Body() credentials: CredentialsDto) {
//     const user = await this.neo4jService.getByUsername(credentials.username);

//     if (user && this.authService.validatePassword(credentials.password, user.password)) {
//       const token = this.authService.generateToken(user);
//       return { token };
//     } else {
//       // Invalid credentials
//       return { message: 'Invalid credentials' };
//     }
//   }
// }
