import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './player.schema';
import { IPlayer } from '@avans-nx-workshop/shared/api';

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}

  async getAllPlayers(): Promise<IPlayer[]> {
    return this.playerModel.find().exec();
  }

  async getPlayerById(id: string): Promise<IPlayer | null> {
    return this.playerModel.findById(id).exec();
  }

  async createPlayer(playerData: IPlayer): Promise<IPlayer> {
    const createdPlayer = new this.playerModel(playerData);
    return createdPlayer.save();
  }

  async updatePlayer(id: string, updatedPlayerData: Partial<IPlayer>): Promise<IPlayer | null> {
    return this.playerModel.findByIdAndUpdate(id, updatedPlayerData, { new: true }).exec();
  }

  async deletePlayer(id: string): Promise<void> {
    await this.playerModel.findByIdAndDelete(id).exec();
  }
}
