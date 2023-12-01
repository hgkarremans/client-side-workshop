// users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserSchema.name) private readonly userModel: Model<UserDocument>) {}

  async getUsers(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }
}
