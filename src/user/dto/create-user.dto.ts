import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'John Doe ', description: 'The name of your user' })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'johndoe@example45.com ',
    description: 'The email of your user',
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 'password ',
    description: 'The password of your user',
  })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
