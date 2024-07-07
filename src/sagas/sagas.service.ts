import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Saga } from './saga.entity';

@Injectable()
export class SagasService {
  constructor(
    @InjectRepository(Saga)
    private readonly sagaRepository: Repository<Saga>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ sagas: Saga[]; total: number }> {
    const [sagas, total] = await this.sagaRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { sagas, total };
  }

  async findOne(id: number): Promise<Saga> {
    return await this.sagaRepository.findOne({ where: { id } });
  }
}
