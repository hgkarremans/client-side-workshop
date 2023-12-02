import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { 
    ITicket,
    User,
    TicketStatus
 } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';
export type TicketDocument = ITicket & Document;

@Schema()
export class Ticket implements ITicket {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String
    })
    title!: string;

    @Prop({
        required: true,
        type: Number
    })
    price!: number;

    @Prop({
        required: true,
        type: Date
    })
    date!: Date;

    @Prop({
        required: true,
        type: String,
        default: TicketStatus.pending
    })
    status!: TicketStatus;
    @Prop({
        required: true,
        type: Number
    })
    seat!: number;
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'User'
    })
    owner?: User;
    
}
export const TicketSchema = SchemaFactory.createForClass(Ticket);