import {
  //   Body,
  Controller,
  Get,
  Param,
  // Post,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  //   ApiBody,
} from '@nestjs/swagger';
import { Chapter } from './chapter.entity';
import { ChapterService } from './chapter.service';

@ApiTags('Chapter')
@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tomes' })
  @ApiResponse({
    status: 200,
    description: 'List of all tomes.',
    type: Chapter,
    isArray: true,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false, example: 1 })
  @ApiQuery({ name: 'limit', type: 'number', required: false, example: 10 })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ tomes: Chapter[]; total: number }> {
    return await this.chapterService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tome by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Chapter ID' })
  @ApiResponse({
    status: 200,
    description: 'The tome with the specified ID.',
    type: Chapter,
  })
  @ApiResponse({ status: 404, description: 'Chapter not found.' })
  async findOne(@Param('id') id: string): Promise<Chapter> {
    return await this.chapterService.findOne(+id);
  }

  //   @Post()
  //   @ApiOperation({ summary: 'Create a new tome' })
  //   @ApiBody({ type: Chapter })
  //   @ApiResponse({
  //     status: 201,
  //     description: 'The tome has been successfully created.',
  //     type: Chapter,
  //   })
  //   async create(@Body() episode: Chapter): Promise<Chapter> {
  //     return await this.chapterService.create(episode);
  //   }

  //   @Post('bulk')
  //   @ApiOperation({ summary: 'Create multiple tomes' })
  //   @ApiBody({ type: [Chapter] })
  //   @ApiResponse({
  //     status: 201,
  //     description: 'The tomes have been successfully created.',
  //     type: Chapter,
  //     isArray: true,
  //   })
  //   async createMultiple(@Body() tomes: Chapter[]): Promise<Chapter[]> {
  //     return await this.chapterService.createMultiple(tomes);
  //   }
}
