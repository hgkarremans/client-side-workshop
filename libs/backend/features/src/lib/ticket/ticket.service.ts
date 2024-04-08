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
  async getTicketById(id: string): Promise<Ticket | null> {
    console.log(`getTicketById invoked with id: ${id}`);
    return this.ticketModel.findById(id).exec();
  }
  async addTicket(ticketData: Ticket): Promise<Ticket> {
    const createdTicket = new this.ticketModel(ticketData);
    return createdTicket.save();
  }

  async deleteTicket(id: string): Promise<void> {
    await this.ticketModel.findByIdAndDelete(id).exec();
  }
  async updateTicket(id: string, updatedTicketData: Partial<Ticket>): Promise<Ticket | null> {
    // Find the ticket by ID and update its data
    const updatedTicket = await this.ticketModel.findByIdAndUpdate(
      id,
      { $set: updatedTicketData },
      { new: true } // Return the updated document
    ).exec();
  
    return updatedTicket;
  }
  async updateUserTicket(id: string, updatedTicketData: Partial<Ticket>): Promise<Ticket | null> {
    const updatedTicket = await this.ticketModel.findByIdAndUpdate(
      id,
      { $set: updatedTicketData },
      { new: true } 
    ).exec();
  
    return updatedTicket;
  }
  
}
