import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Division, DivisionDocument } from './division.schema';
import { IDivision } from '@avans-nx-workshop/shared/api';

@Injectable()
export class DivisionService {
  constructor(@InjectModel(Division.name) private divisionModel: Model<DivisionDocument>) {}

  async getAllDivisions(): Promise<IDivision[]> {
    return this.divisionModel.find().exec();
  }

  async getDivisionById(id: string): Promise<IDivision | null> {
    return this.divisionModel.findById(id).exec();
  }

  async createDivision(divisionData: IDivision): Promise<IDivision> {
    const createdDivision = new this.divisionModel(divisionData);
    return createdDivision.save();
  }

  async updateDivision(id: string, updatedDivisionData: Partial<IDivision>): Promise<IDivision | null> {
    return this.divisionModel.findByIdAndUpdate(id, updatedDivisionData, { new: true }).exec();
  }

  async deleteDivision(id: string): Promise<void> {
    await this.divisionModel.findByIdAndDelete(id).exec();
  }
}
