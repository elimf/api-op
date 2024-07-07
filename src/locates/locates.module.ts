// locate.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locate } from './locate.entity';
import { LocatesService } from './locates.service';
import { LocatesController } from './locates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Locate])],
  providers: [LocatesService],
  controllers: [LocatesController],
})
export class LocatesModule {}
