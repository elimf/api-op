import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

enum CharacterRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Legendary = 'Legendary',
}

@Schema()
export class Character extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop()
  @ApiProperty()
  devil_fruit: string;

  @Prop({ required: true })
  @ApiProperty()
  level: number;

  @Prop()
  @ApiProperty()
  power: number;

  @Prop({
    type: String,
    enum: CharacterRarity,
    default: CharacterRarity.Common,
  })
  @ApiProperty({ enum: CharacterRarity, default: CharacterRarity.Common })
  rarity: CharacterRarity;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  @ApiProperty({ type: 'string' })
  owner: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
