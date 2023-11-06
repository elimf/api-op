import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Arc extends Document {
  @Prop({ required: true })
  @ApiProperty({
    description:
      'the umpteenth arc in the work knowing that the FILLERS are at 0 ',
  })
  number: number;

  @Prop()
  @ApiProperty({ description: 'Level required to unlock the arc' })
  levelRequired: number;

  @Prop({ required: true })
  @ApiProperty({ description: 'Arc name' })
  name: string;

  @Prop()
  @ApiProperty({ description: 'Arc description' })
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }] })
  @ApiProperty({
    type: [String],
    description: 'Unlockable Character ID Table',
  })
  charactersToUnlock: [];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }] })
  @ApiProperty({
    description: 'Events ID table to unlock',
    type: [String],
  })
  eventToUnlock: [];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Saga' })
  @ApiProperty({ type: String, description: 'ID of the associated saga' })
  sagaId: string;
}

export const ArcSchema = SchemaFactory.createForClass(Arc);
