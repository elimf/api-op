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
import { ArcService } from './arc.service';
import { CreateArcDto } from './dto/create-arc.dto';
import { UpdateArcDto } from './dto/update-arc.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthAdminGuard } from 'src/auth/guards/jwt-auth-admin.guard';
import { Arc } from './schema/arc.schema';

@ApiTags('Arc')
@Controller('arc')
export class ArcController {
  constructor(private readonly arcService: ArcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthAdminGuard)
  @ApiOperation({ summary: 'Create an Arc ' })
  @ApiResponse({
    status: 201,
    description: 'This is your new Arc',
    type: Arc,
  })
  create(@Body() createArcDto: CreateArcDto) {
    return this.arcService.create(createArcDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Arc ' })
  @ApiResponse({
    status: 200,
    description: 'Here are all the Arc',
    type: [Arc],
  })
  findAll() {
    return this.arcService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific Arc ' })
  @ApiResponse({
    status: 200,
    description: 'Here is a Arc',
    type: Arc,
  })
  findOne(@Param('id') id: string) {
    return this.arcService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Patch an Arc ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Arc has been changed',
  })
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateArcDto: UpdateArcDto) {
    return this.arcService.update(id, updateArcDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an specific Arc ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Arc has been deleted',
  })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.arcService.remove(id);
  }
}
