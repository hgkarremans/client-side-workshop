import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Neo4jUserService as UsersService } from '../neo4j/Neo4jUser.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name);
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(emailAddress: string, pass: any) {
    const user = await this.usersService.findOne(emailAddress);
  
    this.logger.log(`emailAddress: ${emailAddress} trying to authenticate...`);
    console.log('user: ', user);
    console.log('pass: ', pass);
    console.log('user.passwordHash: ', user.passwordHash);
  
    if (!(await this.usersService.validatePassword(pass, user.passwordHash))) {
      throw new UnauthorizedException();
    }
  
    const payload = { sub: user.Id, username: user.emailAddress, role: user.role };
    const accessToken = await this.jwtService.signAsync(payload);
  
    console.log('payload: ', payload);
    console.log('accessToken: ', accessToken);
  
    return {
      access_token: accessToken,
    };
  }
  

  isLoggedIn(token: string): boolean {
    try {
      // Verify the token and check if it's valid
      const decodedToken = this.jwtService.verify(token);
      return !!decodedToken;
    } catch (error) {
      // Token verification failed
      return false;
    }
  }
}
