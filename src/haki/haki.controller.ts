import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Haki } from './haki.entity';
import { HakiService } from './haki.service';

@ApiTags('Haki')
@Controller('haki')
export class HakiController {
  constructor(private readonly hakiService: HakiService) {}

  @Get()
  @ApiOperation({ summary: 'Get all hakis' })
  @ApiResponse({
    status: 200,
    description: 'List of all hakis.',
    type: Haki,
    isArray: true,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ hakis: Haki[]; total: number }> {
    return await this.hakiService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get haki by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Haki ID' })
  @ApiResponse({
    status: 200,
    description: 'The haki with the specified ID.',
    type: Haki,
  })
  @ApiResponse({ status: 404, description: 'Haki not found.' })
  async findOne(@Param('id') id: number): Promise<Haki> {
    return await this.hakiService.findOne(id);
  }
}
