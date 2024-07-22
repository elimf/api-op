import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tome } from './tome.entity';

@Injectable()
export class TomeService {
  constructor(
    @InjectRepository(Tome)
    private readonly tomeRepository: Repository<Tome>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ tomes: Tome[]; total: number }> {
    const [tomes, total] = await this.tomeRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { tomes, total };
  }

  async findOne(id: number): Promise<Tome> {
    const Tome = await this.tomeRepository.findOne({
      where: { id },
    });
    if (!Tome) {
      throw new NotFoundException(`Tome with id ${id} not found`);
    }
    return Tome;
  }

  async create(tome: Tome): Promise<Tome> {
    return await this.tomeRepository.save(tome);
  }

  async createMultiple(tomes: Tome[]): Promise<Tome[]> {
    return await this.tomeRepository.save(tomes);
  }
}
