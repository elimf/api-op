import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chapter } from './chapter.entity';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ tomes: Chapter[]; total: number }> {
    const [tomes, total] = await this.chapterRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { tomes, total };
  }

  async findOne(id: number): Promise<Chapter> {
    const Chapter = await this.chapterRepository.findOne({
      where: { id },
    });
    if (!Chapter) {
      throw new NotFoundException(`Chapter with id ${id} not found`);
    }
    return Chapter;
  }

  async create(tome: Chapter): Promise<Chapter> {
    return await this.chapterRepository.save(tome);
  }

  async createMultiple(tomes: Chapter[]): Promise<Chapter[]> {
    return await this.chapterRepository.save(tomes);
  }
}
