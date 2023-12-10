import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { IClub, IDivision, ITicket } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';
export type DivisionDocument = IDivision & Document;

@Schema()
export class Division implements IDivision {

    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String
    })
    name!: string;

    @Prop({
        required: true,
        type: String
    })
    ranking!: string;

    @Prop({
        type: [{ type: String, ref: 'Club' }],
        default: [],
    })
    teams!: IClub[];

    @Prop({
        type: [{ type: String, ref: 'Ticket' }],
        default: [],
    })
    tickets!: ITicket[];

    

       
}
export const DivisionSchema = SchemaFactory.createForClass(Division);