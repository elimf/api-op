import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Episode } from './episode.entity';
import { EpisodeService } from './episode.service';

@ApiTags('Episode')
@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all episodes' })
  @ApiResponse({
    status: 200,
    description: 'List of all episodes.',
    type: Episode,
    isArray: true,
  })
  async findAll(): Promise<Episode[]> {
    return await this.episodeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get episode by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Episode ID' })
  @ApiResponse({
    status: 200,
    description: 'The episode with the specified ID.',
    type: Episode,
  })
  @ApiResponse({ status: 404, description: 'Episode not found.' })
  async findOne(@Param('id') id: number): Promise<Episode> {
    return await this.episodeService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new episode' })
  @ApiBody({ type: Episode })
  @ApiResponse({
    status: 201,
    description: 'The episode has been successfully created.',
    type: Episode,
  })
  async create(@Body() episode: Episode): Promise<Episode> {
    return await this.episodeService.create(episode);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Create multiple episodes' })
  @ApiBody({ type: [Episode] })
  @ApiResponse({
    status: 201,
    description: 'The episodes have been successfully created.',
    type: Episode,
    isArray: true,
  })
  async createMultiple(@Body() episodes: Episode[]): Promise<Episode[]> {
    return await this.episodeService.createMultiple(episodes);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an episode' })
  @ApiParam({ name: 'id', type: 'number', description: 'Episode ID' })
  @ApiBody({ type: Episode })
  @ApiResponse({
    status: 200,
    description: 'The episode has been successfully updated.',
  })
  async update(
    @Param('id') id: number,
    @Body() episode: Episode,
  ): Promise<void> {
    return await this.episodeService.update(id, episode);
  }
}
