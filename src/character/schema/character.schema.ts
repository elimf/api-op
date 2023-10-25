import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

enum CharacterRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Legendary = 'Legendary',
}
enum CharacterAffiliation {
  Pirate = 'Pirate',
  Marine = 'Marine',
  Government = 'Government',
  Revolutionary = 'Revolutionary',
}

@Schema()
export class Character extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  @Prop({ required: true })
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
  @Prop({
    type: String,
    enum: CharacterAffiliation,
    default: CharacterAffiliation.Pirate,
  })
  @ApiProperty({
    enum: CharacterAffiliation,
    default: CharacterAffiliation.Pirate,
  })
  @Prop([String]) // Tableau de compétences
  @ApiProperty({ type: [String] })
  skills: string[];
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  @ApiProperty({ type: 'string' })
  owner: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
