import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { IClub, IPlayer } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';
export type ClubDocument = IClub & Document;

@Schema()
export class Club implements IClub {

    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String
    })
    name!: string;

    @Prop({
        required: true,
        type: Date
    })
    setupDate!: Date;

    @Prop({
        required: true,
        type: String
    })
    stadium!: string;   

    @Prop({
        type: [{ type: String, ref: 'Player' }],
        default: [],
    })
    players!: IPlayer[];


    
    
}
export const ClubSchema = SchemaFactory.createForClass(Club);