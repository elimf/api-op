import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
@Schema()
export class Event extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  @Prop({ required: true })
  @ApiProperty()
  description: string;

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Reward' }] })
  @ApiProperty({ type: [String], description: 'Unlockable Reward ID Table' })
  rewards: [];
}

export const EventSchema = SchemaFactory.createForClass(Event);
