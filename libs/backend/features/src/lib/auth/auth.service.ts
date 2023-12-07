import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Neo4jUserService as UsersService } from "../neo4j/Neo4jUser.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name);
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(emailAdress: string, pass: any) {
    const user = await this.usersService.findOne(emailAdress);

    this.logger.log(`emailAdress: ${emailAdress} trying to authenticate...`);

    if (!await this.usersService.validatePassword(pass, user.passwordHash)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.Id, username: user.emailAdress };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}