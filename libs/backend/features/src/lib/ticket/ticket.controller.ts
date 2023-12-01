import { Request, Response } from 'express';
import { TicketService } from './ticket.service';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('api/tickets')
export class TicketController {
    constructor(private ticketService: TicketService) {}

    @Get()
    getTickets(): Promise<ITicket[]> {
      return this.ticketService.getTickets();
    }
}