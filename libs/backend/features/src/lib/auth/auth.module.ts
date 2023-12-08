import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BackendFeaturesModule } from '../backendFeatures.module'; 
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule,
    BackendFeaturesModule, // Fix the import here
    JwtModule.register({
      global: true,
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
  controllers: [AuthController],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}