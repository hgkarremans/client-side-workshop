import { Request, Response } from 'express';
import { TicketService } from './ticket.service';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService) {}

    @Get('')
    getTickets(): Promise<ITicket[]> {
      return this.ticketService.getTickets();
    }

    @Get(':id')
    getTicketById(@Param('id') id: string): Promise<ITicket | null> {
      return this.ticketService.getTicketById(id);
    }

    @Post('')
    addTicket(@Body() ticketData: ITicket): Promise<ITicket> {
      return this.ticketService.addTicket(ticketData);
    }

    @Delete(':id')
    deleteTicket(@Param('id') id: string): Promise<void> {
      return this.ticketService.deleteTicket(id);
    }

    // You can add other methods like updateTicket, etc.
}
