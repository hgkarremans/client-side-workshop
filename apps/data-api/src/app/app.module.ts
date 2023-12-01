import { Module } from '@nestjs/common';
import { MealModule } from '@avans-nx-workshop/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@avans-nx-workshop/user';
import { TicketModule } from '@avans-nx-workshop/tickets';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MealModule, MongooseModule.forRoot('mongodb://localhost:27017/avans-nx-workshop')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
