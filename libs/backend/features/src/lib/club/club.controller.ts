import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ClubService } from './club.service'; // Make sure to import your ClubService
import { Club } from './club.schema'; // Import the Club schema
import { IClub } from '@avans-nx-workshop/shared/api';
import { Public } from './Decorators/public.decorator';

@Controller('club')
@Public()
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get()
  async getAllClubs(): Promise<IClub[]> {
    return this.clubService.getAllClubs();
  }

  @Get(':id')
  async getClubById(@Param('id') id: string): Promise<IClub | null> {
    return this.clubService.getClubById(id);
  }

  @Post()
  async createClub(@Body() clubData: IClub): Promise<IClub> {
    return this.clubService.createClub(clubData);
  }

  @Put(':id')
  async updateClub(@Param('id') id: string, @Body() updatedClubData: Partial<IClub>): Promise<IClub | null> {
    return this.clubService.updateClub(id, updatedClubData);
  }

  @Delete(':id')
  async deleteClub(@Param('id') id: string): Promise<void> {
    return this.clubService.deleteClub(id);
  }
}
