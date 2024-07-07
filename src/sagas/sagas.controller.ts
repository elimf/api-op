import { Controller, Get, Param } from '@nestjs/common';
import { Saga } from './saga.entity';
import { SagasService } from './sagas.service';

@Controller('sagas')
export class SagasController {
  constructor(private readonly sagasService: SagasService) {}

  @Get()
  async findAll(): Promise<Saga[]> {
    return await this.sagasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Saga> {
    return await this.sagasService.findOne(+id);
  }
}
