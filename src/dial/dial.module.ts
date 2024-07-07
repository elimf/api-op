// dial.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dial } from './dial.entity';
import { DialService } from './dials.service';
import { DialController } from './dial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dial])],
  providers: [DialService],
  controllers: [DialController],
})
export class DialModule {}
