import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './episode.entity';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { Arc } from '../arc/arc.entity';
import { Saga } from '../saga/saga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Episode, Arc, Saga])],
  providers: [EpisodeService],
  controllers: [EpisodeController],
})
export class EpisodeModule {}
