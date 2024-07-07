// haki.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Haki } from './haki.entity';
import { HakiService } from './haki.service';
import { HakiController } from './haki.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Haki])],
  providers: [HakiService],
  controllers: [HakiController],
})
export class HakiModule {}
