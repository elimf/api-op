import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saga } from './saga.entity';
import { SagaController } from './saga.controller';
import { SagaService } from './saga.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Saga]), // This registers SagaRepository
  ],
  controllers: [SagaController],
  providers: [SagaService],
  exports: [SagaService], // Export if needed by other modules
})
export class SagasModule {}
