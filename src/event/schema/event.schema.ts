import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Reward' }] })
  @ApiProperty({ type: 'array' })
  rewards: MongooseSchema.Types.ObjectId[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Character' }] })
  @ApiProperty({ type: 'array' })
  participants: MongooseSchema.Types.ObjectId[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
