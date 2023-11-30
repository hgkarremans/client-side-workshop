import { User } from '@avans-nx-workshop/shared/api';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsInt, IsMongoId, IsString } from 'class-validator';

import mongoose from 'mongoose';

export enum TicketStatus {
    active = 'Active',
    inactive = 'Inactive',
    pending = 'Pending',
}

@Schema()
export class Ticket{
    @IsMongoId()
    id!: number;
    @Prop({required: true})
    title!: string;
    @Prop({required: true})
    price!: number;
    @Prop({required: true})
    date!: Date;
    @Prop({required: true})
    status!: TicketStatus;
    @Prop({required: true})
    seat!: number;
    @Prop({required: true})
    owner?: User;
}
export const TicketSchema = SchemaFactory.createForClass(Ticket);


