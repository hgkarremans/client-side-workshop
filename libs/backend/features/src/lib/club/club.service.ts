import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Club, ClubDocument } from './club.schema';
import { IClub, IPlayer } from '@avans-nx-workshop/shared/api';

@Injectable()
export class ClubService {
  constructor(@InjectModel(Club.name) private clubModel: Model<ClubDocument>) {}

  async getAllClubs(): Promise<IClub[]> {
    return this.clubModel.find().exec();
  }

  async getClubById(id: string): Promise<IClub | null> {
    return this.clubModel.findById(id).exec();
  }

  async createClub(clubData: IClub): Promise<IClub> {
    const createdClub = new this.clubModel(clubData);
    return createdClub.save();
  }

  async updateClub(id: string, updatedClubData: Partial<IClub>): Promise<IClub | null> {
    return this.clubModel.findByIdAndUpdate(id, updatedClubData, { new: true }).exec();
  }

  async deleteClub(id: string): Promise<void> {
    await this.clubModel.findByIdAndDelete(id).exec();
  }
  async getClubPlayers(id: string): Promise<IPlayer[] | null> {
    const club = await this.clubModel.findById(id).populate('players').exec();
    return club ? club.players : null;
  }
}  
