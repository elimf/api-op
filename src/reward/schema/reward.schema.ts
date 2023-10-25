import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Reward extends Document {
  @Prop({ required: true })
  @ApiProperty()
  type: string;

  @Prop()
  @ApiProperty()
  amount: number;

  @Prop()
  @ApiProperty()
  item: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  @ApiProperty({ type: 'string' })
  event: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Character' })
  @ApiProperty({ type: 'string' })
  character_reward: string;
}

export const RewardSchema = SchemaFactory.createForClass(Reward);
