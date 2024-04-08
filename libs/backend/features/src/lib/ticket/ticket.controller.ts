import { Request, Response } from 'express';
import { TicketService } from './ticket.service';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Public } from './Decorators/public.decorator';
@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService) {}

    @Get('')
    @Public()
    getTickets(): Promise<ITicket[]> {
      return this.ticketService.getTickets();
    }

    @Get(':id')
    @Public()
    getTicketById(@Param('id') id: string): Promise<ITicket | null> {
      return this.ticketService.getTicketById(id);
    }

    @Post('')
    @Public()
    addTicket(@Body() ticketData: ITicket): Promise<ITicket> {
      return this.ticketService.addTicket(ticketData);
    }

    @Delete(':id')
    @Public()
    deleteTicket(@Param('id') id: string): Promise<void> {
      return this.ticketService.deleteTicket(id);
    }

    @Put(':id') 
    @Public()
    updateTicket(@Param('id') id: string, @Body() updatedTicketData: Partial<ITicket>): Promise<ITicket | null> {
      return this.ticketService.updateTicket(id, updatedTicketData);
    }
    @Put(':id')
    @Public()
    updateUserTicket(@Param('id') id: string, @Body() updatedTicketData: Partial<ITicket>): Promise<ITicket | null> {
      return this.ticketService.updateTicket(id, updatedTicketData);
    }
}
