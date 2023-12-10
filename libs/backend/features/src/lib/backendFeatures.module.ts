import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule first
import { MongooseModule } from '@nestjs/mongoose';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';
import { TicketSchema } from './ticket/ticket.schema';
import { Neo4jUserService } from './neo4j/Neo4jUser.service';
import { UserController } from './neo4j/Neo4jUser.controller';
import { PlayerService } from './player/player.service';
import { ClubService } from './club/club.service';
import { DivisionService } from './division/division.service';
import { PlayerController } from './player/player.controller';
import { DivisionController } from './division/division.controller';
import { ClubController } from './club/club.controller';
import { ClubSchema } from './club/club.schema';
import { PlayerSchema } from './player/player.schema';
import { DivisionSchema } from './division/division.schema';

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '3600s' },
    }),
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }]),
    MongooseModule.forFeature([{ name: 'Club', schema: ClubSchema}]),
    MongooseModule.forFeature([{ name: 'Player', schema: PlayerSchema}]),
    MongooseModule.forFeature([{ name: 'Division', schema: DivisionSchema}]),

  ],
  controllers: [TicketController, UserController, PlayerController, ClubController, DivisionController],
  providers: [TicketService, Neo4jUserService, PlayerService, ClubService, DivisionService],
  exports: [TicketService, Neo4jUserService, PlayerService, ClubService, DivisionService],
})
export class BackendFeaturesModule {}
