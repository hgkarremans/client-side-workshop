import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket, TicketDocument } from './ticket.schema';  
import { Neo4jUserService } from '../neo4j/Neo4jUser.service';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private readonly ticketModel: Model<TicketDocument>,  private readonly neo4jUserservice : Neo4jUserService) {}
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
  async getTicketsFromFriends(Id: string): Promise<Ticket[]> {
    console.log('getTicketsFromFriends called in the service backend');

    // Fetch friends of the user
    const friends = await this.neo4jUserservice.getFriends(Id);
    console.log('Friends:', friends);

    // Fetch all tickets
    const tickets = await this.getTickets();
    console.log('Tickets:', tickets);

    // Filter tickets owned by the friend (ID: 528)
    const friendTickets = tickets.filter(ticket => Number(ticket.owner) === Number(Id));

    console.log('Friend Tickets:', friendTickets);

    // Return the filtered tickets owned by the friend
    return friendTickets;
}

async getTicketsByOwnerId(ownerId: string): Promise<Ticket[]> {
  console.log('getTicketsByOwnerId called in the service backend for owner ID: ' + ownerId);
  
  try {
      const tickets = await this.ticketModel.find({ owner: ownerId }).exec();
      console.log('Tickets:', tickets);
      return tickets;
  } catch (error) {
      console.error('Error fetching tickets by owner ID:', error);
      throw error; // Rethrow the error for handling in the caller
  }
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
