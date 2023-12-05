import { Module } from '@nestjs/common';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';
import { TicketSchema } from './ticket/ticket.schema';  // Corrected import
import { MongooseModule } from '@nestjs/mongoose';
import { Neo4jUserService } from './neo4j/Neo4jUser.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService, Neo4jUserService],
})
export class backendendFeaturesModule {}
