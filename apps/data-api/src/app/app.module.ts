import { Module } from '@nestjs/common';
import { MealModule } from '@avans-nx-workshop/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { backendendFeaturesModule} from '@avans-nx-workshop/backend/features';
import { environment } from '@avans-nx-workshop/shared/util-env';
import { Neo4jModule, Neo4jScheme } from "nest-neo4j/dist";

@Module({
  imports: [MealModule, 
    backendendFeaturesModule, 
    MongooseModule.forRoot(environment.apiUrl),
    Neo4jModule.forRoot({
      scheme : environment.NEO4J_SCHEME as Neo4jScheme,
      host: environment.NEO4J_HOST,
      port: environment.NEO4J_PORT,
      username: environment.NEO4J_USERNAME,
      password: environment.NEO4J_PASSWORD,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}