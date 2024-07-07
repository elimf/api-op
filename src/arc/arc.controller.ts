import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Arc } from './arc.entity';
import { ArcService } from './arc.service';

@ApiTags('Arc')
@Controller('arc')
export class ArcController {
  constructor(private readonly arcService: ArcService) {}

  @Get()
  @ApiOperation({ summary: 'Get all arcs' })
  @ApiResponse({
    status: 200,
    description: 'List of all arcs.',
    type: Arc,
    isArray: true,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ arcs: Arc[]; total: number }> {
    return await this.arcService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get arc by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Arc ID' })
  @ApiResponse({
    status: 200,
    description: 'The arc with the specified ID.',
    type: Arc,
  })
  @ApiResponse({ status: 404, description: 'Arc not found.' })
  async findOne(@Param('id') id: number): Promise<Arc> {
    return await this.arcService.findOne(id);
  }
}
