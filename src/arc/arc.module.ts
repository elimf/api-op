import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arc } from './arc.entity';
import { ArcService } from './arc.service';
import { ArcController } from './arc.controller';
import { Saga } from '../saga/saga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Arc, Saga])],
  providers: [ArcService],
  controllers: [ArcController],
})
export class ArcModule {}
