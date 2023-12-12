import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { PlayerService } from './player.service'; // Import the PlayerService
import { Player } from './player.schema'; // Import the Player schema
import { IPlayer } from '@avans-nx-workshop/shared/api';
import { Public } from './Decorators/public.decorator';

@Controller('player')
@Public()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async getAllPlayers(): Promise<IPlayer[]> {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  async getPlayerById(@Param('id') id: string): Promise<IPlayer | null> {
    return this.playerService.getPlayerById(id);
  }

  @Post()
  async createPlayer(@Body() playerData: IPlayer): Promise<IPlayer> {
    return this.playerService.createPlayer(playerData);
  }

  @Put(':id')
  async updatePlayer(@Param('id') id: string, @Body() updatedPlayerData: Partial<IPlayer>): Promise<IPlayer | null> {
    return this.playerService.updatePlayer(id, updatedPlayerData);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string): Promise<void> {
    return this.playerService.deletePlayer(id);
  }
}
