import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { 
    Ticket,
    User,
    TicketStatus
 } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';
export type TicketDocument = Ticket & Document;

@Schema()
export class TicketSchema implements Ticket {
    @IsMongoId()
    id!: number;

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