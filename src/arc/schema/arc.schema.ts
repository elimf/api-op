import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Arc extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop()
  @ApiProperty()
  level_required: number;

  @Prop({ type: [{ type: [String], ref: 'Character' }] })
  @ApiProperty({ type: [String] })
  characters_to_unlock: string[];

  @Prop({ type: [String], ref: 'Event' })
  @ApiProperty({ type: [String] })
  event_to_unlock: string[];
}

export const ArcSchema = SchemaFactory.createForClass(Arc);
