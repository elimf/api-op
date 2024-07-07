import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Haki } from './haki.entity';

@Injectable()
export class HakiService {
  constructor(
    @InjectRepository(Haki)
    private readonly hakiRepository: Repository<Haki>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ hakis: Haki[]; total: number }> {
    const [hakis, total] = await this.hakiRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { hakis, total };
  }

  async findOne(id: number): Promise<Haki> {
    const haki = await this.hakiRepository.findOne({ where: { id } });
    if (!haki) {
      throw new NotFoundException(`Haki with id ${id} not found`);
    }
    return haki;
  }

  async create(haki: Haki): Promise<Haki> {
    return await this.hakiRepository.save(haki);
  }

  async createMultiple(hakis: Haki[]): Promise<Haki[]> {
    return await this.hakiRepository.save(hakis);
  }

  async update(id: number, haki: Haki): Promise<void> {
    await this.hakiRepository.update(id, haki);
  }

  async remove(id: number): Promise<void> {
    await this.hakiRepository.delete(id);
  }
}
