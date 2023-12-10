import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: true,
  apiUrl: 'https://your-production-api-url/',  
  MONGO_DB_CONNECTION_STRING: 'mongodb+srv://hgkarremans:ticketshop2003@ticketshop.tof9tyt.mongodb.net/?retryWrites=true&w=majority',  
  NEO4J_SCHEME: 'neo4j+s',
  NEO4J_HOST: 'neo4j+s://4127d9b6.databases.neo4j.io',  
  NEO4J_PORT: '7687',  
  NEO4J_USERNAME: 'neo4j', 
  NEO4J_PASSWORD: 'SmJLgg2CZAc0Dg7V45h_wtLcvz8GsGOy6_4NL3Q5H_8',  
  NEO4J_DATABASE: 'ticketshop',  
};
