import { Module } from '@nestjs/common';
import { MealModule } from '@avans-nx-workshop/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@avans-nx-workshop/user';
import { MongooseModule } from '@nestjs/mongoose';
import { backendendFeaturesModule} from '@avans-nx-workshop/backend/features';

@Module({
  imports: [MealModule, backendendFeaturesModule, MongooseModule.forRoot('mongodb://localhost:27017/avans-nx-workshop')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
