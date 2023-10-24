import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Crew extends Document {
  @Prop({ required: true })
  @ApiProperty()
  name: string;

  //   @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Character' }]) // Tableau de personnages
  //   @ApiProperty({ type: [Character] })
  //   members: Character[]; // Liste des membres de l'équipage

  @ApiProperty()
  totalMembers: number;
}

export const CrewSchema = SchemaFactory.createForClass(Crew);
