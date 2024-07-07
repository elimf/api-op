// locate.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locate } from './locate.entity';
import { LocateService } from './locate.service';
import { LocateController } from './locate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Locate])],
  providers: [LocateService],
  controllers: [LocateController],
})
export class LocatesModule {}
