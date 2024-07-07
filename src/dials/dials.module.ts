import { Module } from '@nestjs/common';
import { DialsController } from './dials.controller';
import { DialsService } from './dials.service';

@Module({
  controllers: [DialsController],
  providers: [DialsService]
})
export class DialsModule {}
