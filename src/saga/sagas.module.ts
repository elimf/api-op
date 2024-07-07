import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saga } from './saga.entity';
import { SagasController } from './sagas.controller';
import { SagasService } from './sagas.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Saga]), // This registers SagaRepository
  ],
  controllers: [SagasController],
  providers: [SagasService],
  exports: [SagasService], // Export if needed by other modules
})
export class SagasModule {}
