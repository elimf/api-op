import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Dial } from './dial.entity';
import { DialService } from './dials.service';

@ApiTags('Dials')
@Controller('dials')
export class DialController {
  constructor(private readonly dialService: DialService) {}

  @Get()
  @ApiOperation({ summary: 'Get all dials' })
  @ApiResponse({
    status: 200,
    description: 'List of all dials.',
    type: Dial,
    isArray: true,
  })
  async findAll(): Promise<Dial[]> {
    return await this.dialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get dial by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Dial ID' })
  @ApiResponse({
    status: 200,
    description: 'The dial with the specified ID.',
    type: Dial,
  })
  @ApiResponse({ status: 404, description: 'Dial not found.' })
  async findOne(@Param('id') id: number): Promise<Dial> {
    return await this.dialService.findOne(id);
  }

  // @Put(':id')
  // @ApiOperation({ summary: 'Update a dial' })
  // @ApiParam({ name: 'id', type: 'number', description: 'Dial ID' })
  // @ApiBody({ type: Dial })
  // @ApiResponse({
  //   status: 200,
  //   description: 'The dial has been successfully updated.',
  // })
  // async update(@Param('id') id: number, @Body() dial: Dial): Promise<void> {
  //   return await this.dialService.update(id, dial);
  // }
}
