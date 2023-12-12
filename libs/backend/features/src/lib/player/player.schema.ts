import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { IPlayer } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';
export type PlayerDocument = IPlayer & Document;

@Schema()
export class Player implements IPlayer {


    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String
    })
    firstName!: string;

    @Prop({
        required: true,
        type: String
    })
    lastName!: string;

    @Prop({
        required: true,
        type: Number
    })
    number!: number;

       
}
export const PlayerSchema = SchemaFactory.createForClass(Player);