import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dial } from './dial.entity';

@Injectable()
export class DialService {
  constructor(
    @InjectRepository(Dial)
    private readonly dialRepository: Repository<Dial>,
  ) {}

  async findAll(): Promise<Dial[]> {
    return await this.dialRepository.find();
  }

  async findOne(id: number): Promise<Dial> {
    return await this.dialRepository.findOne({ where: { id } });
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
