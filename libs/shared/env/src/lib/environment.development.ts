import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/',
    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/avans-nx-workshop',
    NEO4J_SCHEME: 'neo4j',
    NEO4J_HOST: 'localhost',
    NEO4J_PORT: '7687',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'ticketshop2003',
    NEO4J_DATABASE: 'neo4j',
}