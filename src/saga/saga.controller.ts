import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Saga } from './saga.entity';
import { SagaService } from './saga.service';

@ApiTags('Sagas')
@Controller('sagas')
export class SagaController {
  constructor(private readonly sagasService: SagaService) {}

  @Get()
  @ApiOperation({ summary: 'Get all sagas with pagination' })
  @ApiResponse({
    status: 200,
    description: 'List of all sagas.',
    type: Saga,
    isArray: true,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ sagas: Saga[]; total: number }> {
    return await this.sagasService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get saga by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Saga ID' })
  @ApiResponse({
    status: 200,
    description: 'The saga with the specified ID.',
    type: Saga,
  })
  @ApiResponse({ status: 404, description: 'Saga not found.' })
  async findOne(@Param('id') id: string): Promise<Saga> {
    return await this.sagasService.findOne(+id);
  }
}
