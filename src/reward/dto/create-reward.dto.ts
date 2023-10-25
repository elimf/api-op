import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Character } from 'src/character/schema/character.schema';
import { Event } from 'src/event/schema/event.schema';
export class CreateRewardDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  item: string;

  @ApiProperty({ type: [MongooseSchema.Types.ObjectId], required: false })
  character_reward?: Character[];

  @ApiProperty({ type: [MongooseSchema.Types.ObjectId], required: false })
  event?: Event[];
}
