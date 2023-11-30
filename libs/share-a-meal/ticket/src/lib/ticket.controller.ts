import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './schemas/ticket.schema';



@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  getAllTickets(): Ticket[] {
    return this.ticketService.getTickets();
  }

  @Get(':id')
  getTicketById(@Param('id') id: number): Ticket {
    return this.ticketService.getTicketById(id);
  }


  @Post()
    createTicket(@Body() ticket: Ticket): void {
        return this.ticketService.addTicket(ticket);
    }


  @Put(':id')
  updateTicket(@Param('id') id: number, @Body() ticket: Ticket): void {
    return this.ticketService.updateTicket(id, ticket);
  }

  @Delete(':id')
  deleteTicket(@Param('id') id: number): void {
    this.ticketService.deleteTicket(id);
  }
}
