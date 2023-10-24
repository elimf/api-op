import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArcService } from './arc.service';
import { CreateArcDto } from './dto/create-arc.dto';
import { UpdateArcDto } from './dto/update-arc.dto';

@Controller('arc')
export class ArcController {
  constructor(private readonly arcService: ArcService) {}

  @Post()
  create(@Body() createArcDto: CreateArcDto) {
    return this.arcService.create(createArcDto);
  }

  @Get()
  findAll() {
    return this.arcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArcDto: UpdateArcDto) {
    return this.arcService.update(+id, updateArcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arcService.remove(+id);
  }
}
