import { Module } from '@nestjs/common';
import { AuthModule, MealModule } from '@avans-nx-workshop/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BackendFeaturesModule} from '@avans-nx-workshop/backend/features';
import { environment } from '@avans-nx-workshop/shared/util-env';
import { Neo4jModule, Neo4jScheme } from "nest-neo4j/dist";

@Module({
  imports: [MealModule, 
    BackendFeaturesModule, 
    AuthModule,
    MongooseModule.forRoot(environment.MONGO_DB_CONNECTION_STRING),
    Neo4jModule.forRoot({
      scheme: environment.NEO4J_SCHEME as Neo4jScheme,
      host: environment.NEO4J_HOST,
      port: parseInt(environment.NEO4J_PORT, 10), 
      username: environment.NEO4J_USERNAME,
      password: environment.NEO4J_PASSWORD,
      database: environment.NEO4J_DATABASE,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}