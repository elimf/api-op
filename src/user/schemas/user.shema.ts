import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  @ApiProperty({ example: 'John Doe ', description: 'The name of your user' })
  name: string;

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
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
