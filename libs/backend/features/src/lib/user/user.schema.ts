import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import { 
    User,
    UserGender,
    UserRole
 } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';
export type UserDocument = User & Document;

@Schema()
export class UserSchema implements User {

    @IsMongoId()
    id!: number;

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
        type: String
    })
    emailAdress!: string;
    @Prop({
        required: true,
        type: Date
    })
    dateOfBirth!: Date;
    @Prop({
        required: true,
        type: String,
        default: UserRole.admin
    })
    role!: UserRole;
    @Prop({
        required: true,
        type: String,
        default: UserGender.male
    })
    gender!: UserGender;
    @Prop({
        required: true,
        type: String
    })
    image!: string;
}