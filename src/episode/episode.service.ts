import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episode } from './episode.entity';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private readonly episodeRepository: Repository<Episode>,
  ) {}

  async findAll(): Promise<Episode[]> {
    return await this.episodeRepository.find({ relations: ['arc', 'saga'] });
  }

  async findOne(id: number): Promise<Episode> {
    return await this.episodeRepository.findOne({
      where: { id },
      relations: ['arc', 'saga'],
    });
  }

  async create(episode: Episode): Promise<Episode> {
    return await this.episodeRepository.save(episode);
  }

  async createMultiple(episodes: Episode[]): Promise<Episode[]> {
    return await this.episodeRepository.save(episodes);
  }

  async update(id: number, episode: Episode): Promise<void> {
    await this.episodeRepository.update(id, episode);
  }

  async remove(id: number): Promise<void> {
    await this.episodeRepository.delete(id);
  }
}
