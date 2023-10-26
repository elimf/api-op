/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CrewService } from './crew.service';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';
import { JwtAuthAdminGuard } from 'src/auth/guards/jwt-auth-admin.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Crew } from './schema/crew.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiBearerAuth()
@ApiTags('Crew')
@Controller('crew')
export class CrewController {
  constructor(private readonly crewService: CrewService) {}

  @Post()
  @UseGuards(JwtAuthAdminGuard)
  create(@Body() createCrewDto: CreateCrewDto) {
    return this.crewService.create(createCrewDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all crew' })
  @ApiResponse({
    status: 200,
    description: 'Get the information of all crew ',
    type: [Crew],
  })
  findAll() {
    return this.crewService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.crewService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthAdminGuard)
  update(@Param('id') id: string, @Body() updateCrewDto: UpdateCrewDto) {
    return this.crewService.update(+id, updateCrewDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthAdminGuard)
  remove(@Param('id') id: string) {
    return this.crewService.remove(+id);
  }
}
