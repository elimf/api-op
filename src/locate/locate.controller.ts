import { Controller, Get, Param, Post, Body, Put, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { Locate } from './locate.entity';
import { LocateService } from './locate.service';

@ApiTags('Locate')
@Controller('Locate')
export class LocateController {
  constructor(private readonly locateService: LocateService) {}

  @Get()
  @ApiOperation({ summary: 'Get all locates' })
  @ApiResponse({
    status: 200,
    description: 'List of all locates.',
    type: Locate,
    isArray: true,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ locates: Locate[]; total: number }> {
    return await this.locateService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get locate by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Locate ID' })
  @ApiResponse({
    status: 200,
    description: 'The locate with the specified ID.',
    type: Locate,
  })
  @ApiResponse({ status: 404, description: 'Locate not found.' })
  async findOne(@Param('id') id: number): Promise<Locate> {
    return await this.locateService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new locate' })
  @ApiBody({ type: Locate })
  @ApiResponse({
    status: 201,
    description: 'The locate has been successfully created.',
    type: Locate,
  })
  async create(@Body() locate: Locate): Promise<Locate> {
    return await this.locateService.create(locate);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a locate' })
  @ApiParam({ name: 'id', type: 'number', description: 'Locate ID' })
  @ApiBody({ type: Locate })
  @ApiResponse({
    status: 200,
    description: 'The locate has been successfully updated.',
  })
  async update(@Param('id') id: number, @Body() locate: Locate): Promise<void> {
    return await this.locateService.update(id, locate);
  }
}
