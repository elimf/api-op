import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

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

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Character' }] })
  @ApiProperty({ type: 'array' })
  characters_to_unlock: MongooseSchema.Types.ObjectId[];

  //   @Prop({ type: Schema.Types.ObjectId, ref: 'Event' })
  //   @ApiProperty({ type: Event })
  //   event_to_unlock: Event;
}

export const ArcSchema = SchemaFactory.createForClass(Arc);
