import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { IDivision } from '@avans-nx-workshop/shared/api';
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
        required: true,
        type: [String]
    })
    teams!: string[];

       
}
export const DivisionSchema = SchemaFactory.createForClass(Division);