import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsMongoId,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArcDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  levelRequired: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsMongoId({
    each: true,
  })
  charactersToUnlock?: string[];

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsMongoId({
    each: true,
  })
  eventToUnlock?: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sagaId: string;
}
