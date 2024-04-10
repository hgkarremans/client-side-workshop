import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: true,
  apiUrl: 'https://clientsidehg.azurewebsites.net/api/',  
  MONGO_DB_CONNECTION_STRING: 'mongodb+srv://hgkarremans:ticketshop2003@ticketshop.tof9tyt.mongodb.net/?retryWrites=true&w=majority',  
  NEO4J_SCHEME: 'neo4j',
  NEO4J_HOST: 'neo4j+s://34280323.databases.neo4j.io',  
  NEO4J_PORT: '7687',  
  NEO4J_USERNAME: 'neo4j', 
  NEO4J_PASSWORD: 'Teg2MDY5jsmvbwaI-522HGvJJuSuALqFkWTBxdIqzI4',  
  NEO4J_DATABASE: 'neo4j',   
};
