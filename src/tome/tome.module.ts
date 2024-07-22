import { Module } from '@nestjs/common';
import { TomeController } from './tome.controller';
import { TomeService } from './tome.service';
import { Tome } from './tome.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tome])],
  controllers: [TomeController],
  providers: [TomeService],
  exports: [TomeService],
})
export class TomeModule {}
