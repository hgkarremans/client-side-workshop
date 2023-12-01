import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketSchema, TicketDocument } from './ticket.schema';

@Injectable()
export class TicketService {
  constructor(@InjectModel(TicketSchema.name) private readonly ticketModel: Model<TicketDocument>) {}
  async getTickets(): Promise<TicketDocument[]> {
    return this.ticketModel.find().exec();
  }
}