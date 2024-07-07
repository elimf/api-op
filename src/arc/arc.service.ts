import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arc } from './arc.entity';

@Injectable()
export class ArcService {
  constructor(
    @InjectRepository(Arc)
    private readonly arcRepository: Repository<Arc>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ arcs: Arc[]; total: number }> {
    const [arcs, total] = await this.arcRepository.findAndCount({
      relations: ['saga'],
      take: limit,
      skip: (page - 1) * limit,
    });
    return { arcs, total };
  }

  async findOne(id: number): Promise<Arc> {
    const arc = await this.arcRepository.findOne({
      where: { id },
      relations: ['saga'],
    });
    if (!arc) {
      throw new NotFoundException(`Arc with id ${id} not found`);
    }
    return arc;
  }

  async create(arc: Arc): Promise<Arc> {
    return await this.arcRepository.save(arc);
  }

  async createMultiple(arcs: Arc[]): Promise<Arc[]> {
    return await this.arcRepository.save(arcs);
  }

  async update(id: number, arc: Arc): Promise<void> {
    await this.arcRepository.update(id, arc);
  }

  async remove(id: number): Promise<void> {
    await this.arcRepository.delete(id);
  }
}
