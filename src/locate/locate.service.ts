import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locate } from './locate.entity';

@Injectable()
export class LocateService {
  constructor(
    @InjectRepository(Locate)
    private readonly locateRepository: Repository<Locate>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ locates: Locate[]; total: number }> {
    const [locates, total] = await this.locateRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { locates, total };
  }

  async findOne(id: number): Promise<Locate> {
    return await this.locateRepository.findOne({ where: { id } });
  }

  async create(locate: Locate): Promise<Locate> {
    return await this.locateRepository.save(locate);
  }
  async createMultiple(dials: Locate[]): Promise<Locate[]> {
    return await this.locateRepository.save(dials);
  }

  async update(id: number, locate: Locate): Promise<void> {
    await this.locateRepository.update(id, locate);
  }
}
