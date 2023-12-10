import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { DivisionService } from './division.service'; // Import the DivisionService
import { Division } from './division.schema'; // Import the Division schema
import { IDivision } from '@avans-nx-workshop/shared/api';

@Controller('division')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Get()
  async getAllDivisions(): Promise<IDivision[]> {
    return this.divisionService.getAllDivisions();
  }

  @Get(':id')
  async getDivisionById(@Param('id') id: string): Promise<IDivision | null> {
    return this.divisionService.getDivisionById(id);
  }

  @Post()
  async createDivision(@Body() divisionData: IDivision): Promise<IDivision> {
    return this.divisionService.createDivision(divisionData);
  }

  @Put(':id')
  async updateDivision(@Param('id') id: string, @Body() updatedDivisionData: Partial<IDivision>): Promise<IDivision | null> {
    return this.divisionService.updateDivision(id, updatedDivisionData);
  }

  @Delete(':id')
  async deleteDivision(@Param('id') id: string): Promise<void> {
    return this.divisionService.deleteDivision(id);
  }
}
