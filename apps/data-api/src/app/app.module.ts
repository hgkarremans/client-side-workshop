import { Module } from '@nestjs/common';
import { MealModule } from '@avans-nx-workshop/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@avans-nx-workshop/user';
import { MongooseModule } from '@nestjs/mongoose';
import { backendendFeaturesModule} from '@avans-nx-workshop/backend/features';
import { environment } from '@avans-nx-workshop/shared/util-env';

@Module({
  imports: [MealModule, backendendFeaturesModule, MongooseModule.forRoot(environment.apiUrl) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}