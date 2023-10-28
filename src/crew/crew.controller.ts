import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
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

@ApiTags('Crew')
@Controller('crew')
export class CrewController {
  constructor(private readonly crewService: CrewService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthAdminGuard)
  @ApiOperation({ summary: 'Create a Crew ' })
  @ApiResponse({
    status: 201,
    description: 'This is your new Crew',
    type: Crew,
  })
  create(@Body() createCrewDto: CreateCrewDto) {
    return this.crewService.create(createCrewDto);
  }

  @Get()
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
  @ApiOperation({ summary: 'Get a specific Crew ' })
  @ApiResponse({
    status: 200,
    description: 'Here is a Crew',
    type: Crew,
  })
  findOne(@Param('id') id: string) {
    return this.crewService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Patch a Crew ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Crew has been changed',
  })
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateCrewDto: UpdateCrewDto) {
    return this.crewService.update(id, updateCrewDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an specific Crew ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Crew has been deleted',
  })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.crewService.remove(id);
  }
}
