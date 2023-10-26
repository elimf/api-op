import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Crew extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Character' }] })
  @ApiProperty({ type: 'array' })
  members: MongooseSchema.Types.ObjectId[];

  @ApiProperty()
  totalMembers: number;
}

export const CrewSchema = SchemaFactory.createForClass(Crew);
