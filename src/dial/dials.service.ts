import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dial } from './dial.entity';

@Injectable()
export class DialService {
  constructor(
    @InjectRepository(Dial)
    private readonly dialRepository: Repository<Dial>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ dials: Dial[]; total: number }> {
    const [dials, total] = await this.dialRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { dials, total };
  }

  async findOne(id: number): Promise<Dial> {
    const dial = await this.dialRepository.findOne({
      where: { id },
    });
    if (!dial) {
      throw new NotFoundException(`Dial with id ${id} not found`);
    }
    return dial;
  }

  async create(dial: Dial): Promise<Dial> {
    return await this.dialRepository.save(dial);
  }

  async createMultiple(dials: Dial[]): Promise<Dial[]> {
    return await this.dialRepository.save(dials);
  }

  async update(id: number, dial: Dial): Promise<void> {
    await this.dialRepository.update(id, dial);
  }
}
