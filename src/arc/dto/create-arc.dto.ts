import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

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

  @ApiProperty({ type: [MongooseSchema.Types.ObjectId], required: false })
  characters?: MongooseSchema.Types.ObjectId[];

  @ApiProperty({ type: [MongooseSchema.Types.ObjectId], required: false })
  events?: MongooseSchema.Types.ObjectId[];
}
