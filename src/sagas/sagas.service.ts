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

  async findAll(): Promise<Saga[]> {
    return await this.sagaRepository.find();
  }

  async findOne(id: number): Promise<Saga> {
    return await this.sagaRepository.findOne({ where: { id } });
  }
}
