import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    production: false,
    apiUrl: 'mongodb://localhost:27017/avans-nx-workshop',
    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/avans-nx-workshop',
    // NEO4J_SCHEME: 'Client-Side',
    // NEO4J_HOST: 'localhost',
    // NEO4J_PORT: '7687',
    // NEO4J_USERNAME: 'neo4j',
    // NEO4J_PASSWORD: 'ticket',
    // NEO4J_DATABASE: 'F1BloggerUsers',
}