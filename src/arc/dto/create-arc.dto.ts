import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Character } from 'src/character/schema/character.schema';
import { Event } from 'src/event/schema/event.schema';

export class CreateArcDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  level_required: number;

  @ApiProperty({ type: [Character] })
  characters?: Character[];

  @ApiProperty({ type: [Event] })
  events?: Event[];
}
