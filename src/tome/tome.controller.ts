import {
  //   Body,
  Controller,
  Get,
  Param,
  // Post,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  //   ApiBody,
} from '@nestjs/swagger';
import { Tome } from './tome.entity';
import { TomeService } from './tome.service';

@ApiTags('Tome')
@Controller('tome')
export class TomeController {
  constructor(private readonly tomeService: TomeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tomes' })
  @ApiResponse({
    status: 200,
    description: 'List of all tomes.',
    type: Tome,
    isArray: true,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ tomes: Tome[]; total: number }> {
    return await this.tomeService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tome by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Tome ID' })
  @ApiResponse({
    status: 200,
    description: 'The tome with the specified ID.',
    type: Tome,
  })
  @ApiResponse({ status: 404, description: 'Tome not found.' })
  async findOne(@Param('id') id: string): Promise<Tome> {
    return await this.tomeService.findOne(+id);
  }

  //   @Post()
  //   @ApiOperation({ summary: 'Create a new tome' })
  //   @ApiBody({ type: Tome })
  //   @ApiResponse({
  //     status: 201,
  //     description: 'The tome has been successfully created.',
  //     type: Tome,
  //   })
  //   async create(@Body() episode: Tome): Promise<Tome> {
  //     return await this.tomeService.create(episode);
  //   }

  //   @Post('bulk')
  //   @ApiOperation({ summary: 'Create multiple tomes' })
  //   @ApiBody({ type: [Tome] })
  //   @ApiResponse({
  //     status: 201,
  //     description: 'The tomes have been successfully created.',
  //     type: Tome,
  //     isArray: true,
  //   })
  //   async createMultiple(@Body() tomes: Tome[]): Promise<Tome[]> {
  //     return await this.tomeService.createMultiple(tomes);
  //   }
}
