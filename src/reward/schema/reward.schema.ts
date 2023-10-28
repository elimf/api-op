import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Reward extends Document {
  @Prop({ required: true })
  @ApiProperty()
  type: string;

  @Prop({ required: true })
  @ApiProperty()
  amount: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  @ApiProperty({ type: [MongooseSchema.Types.ObjectId] })
  event: MongooseSchema.Types.ObjectId[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Character' })
  @ApiProperty({ type: [MongooseSchema.Types.ObjectId] })
  character_reward: MongooseSchema.Types.ObjectId[];
}

export const RewardSchema = SchemaFactory.createForClass(Reward);
