import { Module } from '@nestjs/common';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';
import { TicketSchema } from './ticket/ticket.schema';  
import { MongooseModule } from '@nestjs/mongoose';
import { Neo4jUserService } from './neo4j/Neo4jUser.service';
import { UserController } from './neo4j/Neo4jUser.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }])],
  controllers: [TicketController, UserController],
  providers: [TicketService, Neo4jUserService],
  exports: [TicketService, Neo4jUserService],
})
export class backendendFeaturesModule {}
  