import { Module } from '@nestjs/common';
import { TicketController} from './ticket/ticket.controller'
import { TicketService } from './ticket/ticket.service';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService],
})
export class TicketModule {}
