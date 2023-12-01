import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket, TicketDocument } from './ticket.schema';  // Import the correct types

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private readonly ticketModel: Model<TicketDocument>) {}
  async getTickets(): Promise<TicketDocument[]> {
    console.log('getTickets aangeroepen in service backend');
    return this.ticketModel.find().exec();
  }
}
