import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule first
import { MongooseModule } from '@nestjs/mongoose';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';
import { TicketSchema } from './ticket/ticket.schema';
import { Neo4jUserService } from './neo4j/Neo4jUser.service';
import { UserController } from './neo4j/Neo4jUser.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '3600s' },
    }),
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }]),
  ],
  controllers: [TicketController, UserController],
  providers: [TicketService, Neo4jUserService],
  exports: [TicketService, Neo4jUserService],
})
export class BackendFeaturesModule {}
