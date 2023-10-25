import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  }
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: true })
  @ApiProperty({
    example: 'JohnDoe ',
    description: 'The username of your user',
  })
  username: string;
  @Prop()
  @ApiProperty()
  level: number;

  @Prop()
  @ApiProperty()
  berry: number;

  @Prop({ required: true, unique: true })
  @ApiProperty({
    example: 'johndoe@example45.com ',
    description: 'The email of your user',
  })
  email: string;

  @Prop({ required: true })
  @ApiProperty({
    example: 'password ',
    description: 'The password of your user',
  })
  password: string;
  @Prop({ type: String, enum: Object.values(UserRole), default: UserRole.USER })
  
 
  role: UserRole;
}
export const UserSchema = SchemaFactory.createForClass(User);
