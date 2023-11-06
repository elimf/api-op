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
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthAdminGuard } from 'src/auth/guards/jwt-auth-admin.guard';
import { Event } from './schema/event.schema';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthAdminGuard)
  @ApiOperation({ summary: 'Create an Event ' })
  @ApiResponse({
    status: 201,
    description: 'This is your new Evenr',
    type: Event,
  })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Event ' })
  @ApiResponse({
    status: 200,
    description: 'Here are all the Event',
    type: [Event],
  })
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific Event ' })
  @ApiResponse({
    status: 200,
    description: 'Here is a Event',
    type: Event,
  })
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Patch an Event ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Event has been changed',
  })
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an specific Event ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Event has been deleted',
  })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
